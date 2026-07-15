import { useEffect, useState } from "react";
import { dashboardStyles as s, statColors } from "../assets/dummyStyles.js";
import { useNavigate } from "react-router-dom";
import CustomSelect from "../components/CustomSelect.jsx";
import {
  BriefcaseBusiness,
  Building2,
  CircleCheck,
  CircleX,
  Filter,
  MapPin,
  Search,
  TrendingUp,
  Users,
  X,
} from "lucide-react";

const Dashboard = () => {
  const [companyFilter, setCompanyFilter] = useState("");
  const [roleFilter, setRoleFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("active");
  const [loading, setLoading] = useState(true);
  const [dashboardStats, setDashboardStats] = useState({
    totalJobs: "0",
    closedJobs: "0",
    totalApplicants: "0",
    totalCompanies: "0",
  });

  const [toast, setToast] = useState(null);
  const [jobs, setJobs] = useState([]);

  const navigate = useNavigate();

  const stats = [
    {
      label: "Total Jobs",
      value: dashboardStats.totalJobs,
      icon: BriefcaseBusiness,
      colors: statColors.blue,
    },
    {
      label: "Closed Jobs",
      value: dashboardStats.closedJobs,
      icon: BriefcaseBusiness,
      colors: statColors.rose,
    },
    {
      label: "Total Applicants",
      value: dashboardStats.totalApplicants,
      icon: Users,
      colors: statColors.emerald,
    },
    {
      label: "Active Companies",
      value: dashboardStats.totalCompanies,
      icon: Building2,
      colors: statColors.amber,
    },
  ];

  // Fetch data
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const token = localStorage.getItem("token");
        // TODO: uncomment after dev
        // if (!token) {
        //   navigate("/login");
        //   return;
        // }

        // Fetch stats
        const statsRes = await fetch(
          "http://localhost:5000/api/job/admin/stats",
          { headers: { Authorization: `Bearer ${token}` } },
        );

        const statsData = await statsRes.json();
        if (statsData.success) {
          setDashboardStats(statsData.stats);
        }

        // Fetch Jobs
        const jobsRes = await fetch(
          "http://localhost:5000/api/job/admin/jobs",
          {
            headers: { Authorization: `Bearer ${token}` },
          },
        );

        const jobsData = await jobsRes.json();
        if (jobsData.success) {
          const mappedJobs = jobsData.jobs.map((j) => ({
            id: j._id,
            name: j.companyName,
            role: j.roleName,
            location: j.location,
            category: j.category,
            logo: j.companyLogo?.startsWith("http")
              ? j.companyLogo
              : `http://localhost:5000${j.companyLogo || ""}`,
            applicants: j.applicantsCount || 0,
            status: j.status || "active",
          }));
          setJobs(mappedJobs);
        }
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [navigate]);

  // Toast auto dismiss
  useEffect(() => {
    if (toast && toast.confirm) {
      const timer = setTimeout(() => setToast(null), 3000); // Toast shown for 3 seconds
      return () => clearTimeout(timer);
    }
  }, [toast]);

  // Close Job
  const handleCloseJob = (jobId) => {
    setToast({
      message: "Are you sure you want to close this job?",
      type: "confirm",
      confirm: true,
      jobId,
    });
  };

  // Confirm Close
  const handleConfirmClose = async () => {
    const jobId = toast.jobId;
    setToast(null);

    try {
      const token = localStorage.getItem("token");
      const res = await fetch(`http:localhost:5000/api/job/${jobId}/close`, {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();
      if (data.success) {
        setToast({
          message: "Job closed successfully",
          type: "success",
        });

        // refresh stats
        const statsRes = await fetch(
          `http://localhost:5000/api/job/admin/stats`,
          { headers: { Authorization: `Bearer ${token}` } },
        );

        const statsData = await statsRes.json();
        if (statsData.success) {
          setDashboardStats(statsData.stats);
        }

        const jobsRes = await fetch(
          `http://localhost:5000/api/job/admin/jobs`,
          {
            headers: { Authorization: `Bearer ${token}` },
          },
        );

        const jobsData = await jobsRes.json();
        if (jobsData.success) {
          const mappedJobs = jobsData.jobs.map((j) => ({
            id: j._id,
            name: j.companyName,
            role: j.roleName,
            location: j.location,
            category: j.category,
            logo: j.companyLogo?.startsWith("http")
              ? j.companyLogo
              : `http://localhost:5000${j.companyLogo || ""}`,
            applicants: j.applicantsCount || 0,
            status: j.status || "active",
          }));
          setJobs(mappedJobs);
        }
      }
    } catch (error) {
      console.error("Error admin closing job:", error);
      setToast({
        message: "Failed to close the job",
        type: error,
      });
    }
  };

  const uniqueCompanies = [...new Set(jobs.map((c) => c.name))];
  const uniqueRoles = [...new Set(jobs.map((c) => c.role))];

  // Filter jobs based on selected filters
  const filteredJobs = jobs.filter((job) => {
    const matchesCompany = companyFilter === "" || job.name === companyFilter;
    const matchesRole = roleFilter === "" || job.role === roleFilter;
    const matchesStatus = statusFilter === "all" || job.status === statusFilter;
    return matchesCompany && matchesRole && matchesStatus;
  });

  // fallback for logos,when failed to load logo image
  const handleImageError = (e) => {
    e.target.style.display = "none";
    e.target.nextSibling?.classList.remove("hidden");
  };

  // clear all filters and set to default
  const clearFilters = () => {
    setCompanyFilter("");
    setRoleFilter("");
    setStatusFilter("active");
  };

  return (
    <div className={s.container}>
      {/* Toast Notification */}
      {toast && (
        <div className={s.toastWrapper}>
          <div
            className={`
              ${s.toastBase}
                ${
                  toast.type === "success"
                    ? s.toastSuccess
                    : toast.success === "error"
                      ? s.toastError
                      : s.toastDefault
                }`}
          >
            {toast.type === "success" ? (
              <CircleCheck size={20} className={s.toastIconSuccess} />
            ) : (
              <CircleX
                size={20}
                className={
                  toast.type === "error" ? s.toastIconError : s.toastIconDefault
                }
              />
            )}

            <div className={s.toastFlex}>
              <p className={s.toastMessage}>{toast.message}</p>
              {toast.confirm && (
                <div className={s.toastButtonContainer}>
                  <button
                    onClick={handleConfirmClose}
                    className={s.toastConfirmBtn}
                  >
                    Confirm
                  </button>
                  <button
                    onClick={() => setToast(null)}
                    className={s.toastCancelBtn}
                  >
                    Cancel
                  </button>
                </div>
              )}
            </div>

            {!toast.confirm && (
              <button
                onClick={() => setToast(null)}
                className={s.toastCloseBtn}
              >
                <X size={16} />
              </button>
            )}
          </div>
        </div>
      )}

      {/* Header */}
      <div className={s.contentWrapper}>
        <div className={s.headerContainer}>
          <div>
            <h1 className={s.headerTitle}>Emberly Admin Dashboard</h1>
            <p className={s.headerSubtitle}>
              <TrendingUp className={s.headerIcon} />
              <span>Real-time overview of jobs and applicants</span>
            </p>
          </div>
        </div>

        {/* Stats Card */}
        <div className={s.statsGrid}>
          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.label}
                className={`${s.statCard} ${stat.colors.hoverGlow}`}
              >
                <div className={s.statCardOverlay}></div>
                <div className={s.statCardContent}>
                  <div className={s.statCardTextContainer}>
                    <p className={s.statCardLabel}>{stat.label}</p>
                    <p className={s.statCardValue}>{stat.value}</p>
                  </div>

                  <div
                    className={`${s.statCardIconWrapper} ${stat.colors.bgLight}`}
                  >
                    <Icon className={s.statCardIcon} strokeWidth={1.8} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Filter Section */}
        <div className={s.filtersContainer}>
          <div className={s.filtersHeader}>
            <div className={s.filtersTitleContainer}>
              <Filter className={s.filtersIcon} />
              <h2 className={s.filtersTitle}>Filters</h2>
            </div>

            {(companyFilter || roleFilter || statusFilter !== "active") && (
              <button onClick={clearFilters} className={s.filtersClearBtn}>
                <X className="w-4 h-4" />
                Clear All
              </button>
            )}
          </div>

          <div className={s.filtersGrid}>
            {/* Company Filter */}
            <div className={s.filterInputContainer}>
              <label className={s.filterLabel}>Company</label>
              <CustomSelect
                icon={Search}
                value={companyFilter}
                onChange={setCompanyFilter}
                placeholder="All Companies"
                options={[
                  { value: "", label: "All Companies" },
                  ...uniqueCompanies.map((company) => ({
                    value: company,
                    label: company,
                  })),
                ]}
              />
            </div>

            {/* Role Filter */}
            <div className={s.filterInputContainer}>
              <label className={s.filterLabel}>Role</label>
              <CustomSelect
                icon={Search}
                value={roleFilter}
                onChange={setRoleFilter}
                placeholder="All Roles"
                options={[
                  { value: "", label: "All Roles" },
                  ...uniqueRoles.map((role) => ({ value: role, label: role })),
                ]}
              />
            </div>
          </div>
        </div>

        {/* Jobs Section */}
        <div className={s.jobsSection}>
          <div className={s.jobsHeader}>
            <h2 className={s.jobsTitle}>
              <Building2 className={s.jobsTitleIcon} />
              {statusFilter === "active"
                ? "Active Roles"
                : statusFilter === "closed"
                  ? "Closed Roles"
                  : "All Roles"}
            </h2>

            <div className={s.jobsFilterContainer}>
              <CustomSelect
                compact
                value={statusFilter}
                onChange={setStatusFilter}
                options={[
                  { value: "active", label: "Active" },
                  { value: "closed", label: "Closed" },
                  { value: "all", label: "All" },
                ]}
              />

              <div className={s.jobsCount}>
                {filteredJobs.length}&nbsp;
                {filteredJobs.length === 1 ? "job" : "jobs"}
              </div>
            </div>
          </div>

          {/* Jobs Card */}
          {loading ? (
            <div className={s.loadingContainer}>
              <div className={s.loadingSpinner}></div>
            </div>
          ) : filteredJobs.length > 0 ? (
            <div className={s.jobsGrid}>
              {filteredJobs.map((job) => (
                <div key={job.id} className={s.jobCard}>
                  <div className={s.jobCardAccentBar} />
                  <div className={s.jobCardOverlay} />

                  <div className={s.jobCardContent}>
                    <div className={s.jobCardHeader}>
                      <div className={s.jobLogoContainer}>
                        <div className={s.jobLogoWrapper}>
                          <img
                            src={job.logo}
                            alt={job.name}
                            className={s.jobLogo}
                            onError={handleImageError}
                          />

                          <div className={s.jobLogoFallback}>
                            <Building2 className={s.jobLogoFallbackIcon} />
                          </div>
                        </div>
                      </div>

                      {/* Job Details */}
                      <div className={s.jobDetails}>
                        <h3 className={s.jobRole}>{job.role}</h3>

                        <p className={s.jobCompany}>
                          <Building2 className={s.jobCompanyIcon} />
                          {job.name}
                        </p>

                        <p className={s.jobLocation}>
                          <MapPin className={s.jobLocationIcon} />
                          {job.location}
                        </p>
                      </div>
                    </div>

                    <div className={s.jobDivider} />

                    <div className={s.jobMeta}>
                      <span className={s.jobCategory}>{job.category}</span>
                      <div className={s.jobApplicants}>
                        <Users className={s.jobApplicantsIcon} />
                        <span className={s.jobApplicantsCount}>
                          {job.applicants}
                        </span>

                        <span className={s.jobApplicantsLabel}>applicants</span>
                      </div>
                    </div>

                    <div className={s.jobActions}>
                      <button
                        onClick={() =>
                          navigate("/applicants", {
                            state: {
                              jobId: job.id,
                              role: job.role,
                              comapanyName: job.name,
                            },
                          })
                        }
                        className={s.viewApplicantsBtn}
                      >
                        View Applicants
                      </button>
                      {job.status === "active" && (
                        <button
                          onClick={() => handleCloseJob(job.id)}
                          className={s.closeJobBtn}
                        >
                          Close Job
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className={s.emptyState}>
              <div className={s.emptyStateIconWrapper}>
                <Building2 className={s.emptyStateIcon} />
              </div>
              <h3 className={s.emptyStateTitle}>No matching jobs found</h3>
              <p className={s.emptyStateText}>
                Try adjusting your filters above
              </p>
              <button onClick={clearFilters} className={s.emptyStateBtn}>
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </div>

      <style>{s.animations}</style>
    </div>
  );
};

export default Dashboard;

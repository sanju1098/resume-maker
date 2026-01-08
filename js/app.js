document.getElementById("resumeForm")?.addEventListener("submit", function (e) {
  e.preventDefault();

  const get = (id) => document.getElementById(id).value.trim();

  const clearErrors = () => {
    document.querySelectorAll(".error-message").forEach((el) => el.remove());
    document
      .querySelectorAll(".error-field")
      .forEach((el) => el.classList.remove("error-field"));
  };

  const showError = (id, msg) => {
    const el = document.getElementById(id);
    const error = document.createElement("div");
    error.className = "error-message";
    error.textContent = msg;
    el.classList.add("error-field");
    el.insertAdjacentElement("afterend", error);
  };

  clearErrors();

  let valid = true;
  let firstErrorField = null;

  if (!get("name")) {
    showError("name", "Name is required");
    valid = false;
    if (!firstErrorField) firstErrorField = document.getElementById("name");
  }
  if (!get("phone")) {
    showError("phone", "Phone number is required");
    valid = false;
    if (!firstErrorField) firstErrorField = document.getElementById("phone");
  }
  if (!get("email")) {
    showError("email", "Email is required");
    valid = false;
    if (!firstErrorField) firstErrorField = document.getElementById("email");
  }
  if (!get("objective")) {
    showError("objective", "Objective is required");
    valid = false;
    if (!firstErrorField)
      firstErrorField = document.getElementById("objective");
  }

  if (!valid) {
    firstErrorField.scrollIntoView({ behavior: "smooth", block: "center" });
    firstErrorField.focus();
    return;
  }

  const resumeHTML = `
    <h1>${get("name")}</h1>
    <p>${get("phone")} | ${get("email")}</p>
    ${get("linkedin") ? `<p>LinkedIn: ${get("linkedin")}</p>` : ""}

    <div class="resume-section">
      <h3>Objective</h3>
      <p>${get("objective")}</p>
    </div>

    <div class="resume-section">
      <h3>Education</h3>
      <ul>
        ${get("edu10") ? `<li>${get("edu10")}</li>` : ""}
        ${get("edu12") ? `<li>${get("edu12")}</li>` : ""}
        ${get("degree") ? `<li>${get("degree")}</li>` : ""}
      </ul>
    </div>

    <div class="resume-section">
      <h3>Skills</h3>
      <p>${get("skills")}</p>
    </div>

    ${
      get("projects")
        ? `<div class="resume-section"><h3>Projects</h3><p>${get(
            "projects"
          )}</p></div>`
        : ""
    }
    ${
      get("certificates")
        ? `<div class="resume-section"><h3>Certificates</h3><p>${get(
            "certificates"
          )}</p></div>`
        : ""
    }
    ${
      get("internships")
        ? `<div class="resume-section"><h3>Internships</h3><p>${get(
            "internships"
          )}</p></div>`
        : ""
    }
  `;

  const output = document.getElementById("resumeOutput");
  output.innerHTML = resumeHTML;
  output.scrollIntoView({ behavior: "smooth" });

  document.getElementById("downloadResume").onclick = () => {
    const blob = new Blob([resumeHTML], { type: "text/html" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "Resume.html";
    link.click();
  };
});

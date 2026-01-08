document.getElementById("resumeForm")?.addEventListener("submit", function (e) {
  e.preventDefault();

  const get = (id) => document.getElementById(id).value;

  const resume = `
    <h1>${get("name")}</h1>
    <p>${get("phone")} | ${get("email")}</p>

    <div class="resume-section">
      <h3>Objective</h3>
      <p>${get("objective")}</p>
    </div>

    <div class="resume-section">
      <h3>Education</h3>
      <ul>
        <li>${get("edu10")}</li>
        <li>${get("edu12")}</li>
        <li>${get("degree")}</li>
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

  document.getElementById("resumeOutput").innerHTML = resume;
  document
    .getElementById("resumeOutput")
    .scrollIntoView({ behavior: "smooth" });
});

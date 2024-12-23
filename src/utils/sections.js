const sections = [
  {
    name: "Personal Information",
    buttons: false,
    inputs: [
      {
        inputType: "text",
        label: "Full Name",
        placeHolder: "e.g. John Smith",
        id: "full-name",
      },
      {
        inputType: "email",
        label: "Email",
        placeHolder: "e.g. johnsmith@gmail.com",
        id: "email",
      },
      {
        inputType: "text",
        label: "Your Phone Number",
        placeHolder: "e.g. +30 697777777",
        id: "phone-number",
      },
      {
        inputType: "text",
        label: "LinkedIn",
        placeHolder: "e.g https://www.linkedin.com/...",
        id: "linkedIn",
      },
      {
        inputType: "text",
        label: "GitHub",
        placeHolder: "e.g. https://github.com/...",
        id: "gitHub",
      },
      {
        inputType: "text",
        label: "Location",
        placeHolder: "e.g. Greece, Athens",
        id: "location",
      },
    ],
  },
  {
    name: "Education",
    buttons: true,
    inputs: [
      {
        inputType: "text",
        label: "School - University",
        placeHolder: "e.g. AUEB",
        id: "school",
      },
      {
        inputType: "text",
        label: "Degree",
        placeHolder: "e.g. MCA",
        id: "degree",
      },
      {
        inputType: "text",
        label: "Field of Study",
        placeHolder: "e.g. Computer Sciences",
        id: "field",
      },
      {
        inputType: "text",
        label: "Grade",
        placeHolder: "e.g. 8.75",
        id: "grade",
      },
      {
        inputType: "date",
        label: "Start Date",
        placeHolder: null,
        id: "edu-start-date",
      },
      {
        inputType: "date",
        label: "End Date",
        placeHolder: null,
        id: "edu-end-date",
      },
    ],
  },
  {
    name: "Experience",
    buttons: true,
    inputs: [
      {
        inputType: "text",
        label: "Job Title",
        placeHolder: "e.g. Full Stack developer",
        id: "jobTitle",
      },
      {
        inputType: "text",
        label: "Company Name",
        placeHolder: "e.g. Amazon",
        id: "company",
      },
      {
        inputType: "text",
        label: "Location",
        placeHolder: "e.g. California",
        id: "company-location",
      },
      {
        inputType: "text",
        label: "Location Type",
        placeHolder: "e.g. Remote",
        id: "location-type",
      },
      {
        inputType: "date",
        label: "Start Date",
        placeHolder: null,
        id: "job-start-date",
      },
      {
        inputType: "date",
        label: "End Date",
        placeHolder: null,
        id: "job-end-date",
      },
    ],
    details: {
      label: "Job Responsibilities",
      placeHolder: "Add Job Responsibilities",
      id: "job-responsibilities",
    },
  },
  {
    name: "Skills",
    buttons: true,
    inputs: [
      {
        inputType: "text",
        label: "Skill Name",
        placeHolder: "e.g. Databases",
        id: "skill-name",
      },
    ],
    details: {
      label: "Skill Details",
      placeHolder: "e.g. MySQL",
      id: "skill-details",
    },
  },
  {
    name: "Projects",
    buttons: true,
    inputs: [],
  },
  {
    name: "Languages",
    buttons: false,
    inputs: [],
    details: {
      label: "Language and Your Level (1 - 5)",
      placeHolder: "e.g. English 4",
      id: "language-level",
    },
  },
];
export default sections;

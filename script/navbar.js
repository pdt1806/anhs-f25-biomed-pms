const tabs = [
  {
    name: "Reprint Admission Form",
    link: "/",
  },
  {
    name: "Discharge Inpatient",
    link: "/discharge",
  },
  {
    name: "Transfer / Bed Exchange",
    link: "/transfer",
  },
  {
    name: "Update Patient Information",
    link: "/update",
  },
  {
    name: "Print Wristband",
    link: "/wristband",
  },
  {
    name: "Insurance Verification",
    link: "/verification",
  },
  {
    name: "Admission Checklist",
    link: "/checklist",
  },
  {
    name: "Financial Clearance",
    link: "/clearance",
  },
  {
    name: "Emergency Admission",
    link: "/admission",
  },
  {
    name: "Outpatient Registration",
    link: "/outpatient",
  },
];

const navbar = document.getElementById("main-nav");

const currentPath = window.location.pathname;

tabs.forEach((tab) => {
  const tabElement = document.createElement("div");
  const tabLink = document.createElement("a");
  tabLink.href = tab.link;
  tabLink.textContent = tab.name;
  currentPath === tab.link ? (tabLink.style.fontWeight = "bold") : null;
  tabLink.appendChild(tabElement);
  navbar.appendChild(tabLink);
});

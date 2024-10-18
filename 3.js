const sectors = [
  { color: "#ff9999", label: "Am 1 set" },
  { color: "#99ccff", label: "sej 1 set" },
  { color: "#99ff99", label: "Bio 1 set" },
  { color: "#ffcc99", label: "Phy 1 set" },
  { color: "#ff9966", label: "Chemistry 1 set" }
];

const wheel = document.getElementById("wheel");
const result = document.getElementById("result");

function spin() {
  const randomIndex = Math.floor(Math.random() * sectors.length);
  const sector = sectors[randomIndex];
  const degree = 360 * 3 + randomIndex * (360 / sectors.length);

  wheel.style.transition = "transform 4s ease-out";
  wheel.style.transform = `rotate(${degree}deg)`;

  setTimeout(() => {
    result.innerText = `Congratulations! You won ${sector.label}!`;
    wheel.style.transition = "none";
    wheel.style.transform = "rotate(0deg)";
  }, 4000);
}

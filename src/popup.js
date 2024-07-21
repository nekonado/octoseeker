document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("search");
  button.addEventListener("click", function () {
    const base = document.getElementById("base").value || null;
    const head = document.getElementById("head").value || null;
    window.alert(`query\nbase: ${base}, head: ${head}`);
  });
});

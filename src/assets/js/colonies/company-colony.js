function loadColonyDetails(e) {
    e.preventDefault();
    localStorage.setItem("colony-id", e.target.closest("article").querySelector("a").getAttribute("id"));
    window.location.assign("company-colony-details.html");
}

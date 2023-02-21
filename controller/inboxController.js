function getInbox(req, res, next) {
  res.render("inbox", {
    title: "Login - Chat Application",
  });
}

module.exports = {
  getInbox,
};

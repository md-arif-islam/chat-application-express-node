function getUsers(req, res, next) {
  res.render("users", {
    title: "Users - Chat Application",
  });
}

module.exports = {
  getUsers,
};

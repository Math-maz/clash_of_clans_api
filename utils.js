module.exports = {
  formatParamString: function(
    name = null,
    minMembers = null,
    maxMembers = null,
    minClanLevel = null
  ) {
    return `${name ? "&name=" + name : ""}${
      minMembers ? "&minMembers=" + minMembers : ""
    }${maxMembers ? "&maxMembers=" + maxMembers : ""}${
      minClanLevel ? "&minClanLevel=" + minClanLevel : ""
    }`;
  }
};

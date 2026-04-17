useEffect(() => {
  const verifyUser = async () => {
    const token = localStorage.getItem("access_token");
    console.log(token);
    if (!token) return;
    try {
      await axios.get("http://localhost:3000/verify", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (err) {
      // Token invalid → logout
      localStorage.removeItem("access_token");
      window.location.href = "/login";
    }
  };

  verifyUser();
}, []);

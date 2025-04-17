function openEmailDraft() {
    const email = "maxxakeegan@gmail.com";
    const subject = encodeURIComponent("Hello from your portfolio!");
    const body = encodeURIComponent("Hi there!");

    window.open(`mailto:${email}?subject=${subject}&body=${body}`, "_blank");
  }
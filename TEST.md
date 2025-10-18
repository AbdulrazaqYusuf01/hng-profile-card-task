# TESTING.md — Profile Card (Stage 0)

This document outlines the **testing process and results** for the _Profile Card_ project, ensuring that every section works correctly, adapts well to different screens, and remains accessible to all users.

---

## ✅ Functional Testing

| Feature                  | Test Description                                                                                                                    | Status    |
| ------------------------ | ----------------------------------------------------------------------------------------------------------------------------------- | --------- |
| **User Name**            | Checked that the full name appears clearly in the header (`data-testid="test-user-name"`).                                          | ✅ Passed |
| **User Bio**             | Verified the bio text is visible and properly formatted (`data-testid="test-user-bio"`).                                            | ✅ Passed |
| **User Avatar**          | Confirmed that the avatar image loads successfully with descriptive alt text (`data-testid="test-user-avatar"`).                    | ✅ Passed |
| **Dynamic Time Display** | Ensured the time updates automatically every second (`data-testid="test-user-time"`).                                               | ✅ Passed |
| **Social Links**         | Validated that all social icons link correctly, open in new tabs, and are keyboard-accessible (`data-testid="test-user-social-*"`). | ✅ Passed |

---

## 📱 Responsiveness Tests

- Tested on **mobile (375px)**, **tablet (768px)**, and **desktop (1440px)** screen widths.
- The layout automatically adjusts to fit all devices, keeping a clean, readable design.
- No elements overflow or distort when resizing.
  ✅ **All responsive checks passed.**

---

## ♿ Accessibility Review

- Used proper **semantic structure** with `<header>`, `<section>`, `<article>`, `<nav>`, and `<figure>`.
- Verified that **contrast ratios** between text and background meet accessibility standards.
- Confirmed that all **links are reachable and operable via keyboard navigation**.
  ✅ **Accessibility verified.**

---

## 🌍 Browser Compatibility

| Browser     | Tested | Result                                 |
| ----------- | ------ | -------------------------------------- |
| **Chrome**  | ✅     | Works flawlessly                       |
| **Edge**    | ✅     | Works flawlessly                       |
| **Firefox** | ✅     | Works flawlessly                       |
| **Safari**  | ⚪     | Not tested (no Apple device available) |

---

## 🧩 Validation Summary

- **HTML** checked using [W3C Validator](https://validator.w3.org/) — no major errors found.
- **CSS** validated using [Jigsaw Validator](https://jigsaw.w3.org/css-validator/).
- **JavaScript** tested for functionality and console errors — none detected.

---

## 🗒️ Additional Notes

- The card follows **semantic and responsive web design principles**.
- The **current time** feature uses `Date.now()` and updates in real time.
- Avatar image (`avatar.jpg`) is stored locally and optimized for web.
- FontAwesome icons used for social links with smooth hover transitions.

---

**Final Summary:**
✅ Functional, responsive, and accessible across major browsers.
🚀 Project is production-ready and meets all testing criteria.

---

Would you like me to now write a matching **README.md** version that complements this (so both files look aligned and professional for submission)?

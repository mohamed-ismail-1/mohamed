import React from "react";


export default function Footer() {
return (
<footer className="py-4 text-center bg-white mt-4 border-top">
<div className="container">
<p className="mb-0">© {new Date().getFullYear()} Mohamed Ismail. All Rights Reserved.</p>
</div>
</footer>
);
}
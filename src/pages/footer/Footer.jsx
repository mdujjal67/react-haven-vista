
const Footer = () => {
    return (
        <div className="container mx-auto">
            <footer className="footer p-10 bg-base-200 text-base-content">
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Property</a>
                    <a className="link link-hover">Exclusive</a>
                    <a className="link link-hover">Guidance</a>
                    <a className="link link-hover">After-Sales</a>
                </nav>
                <nav>
                    <h6 className="footer-title">FOR HAVEN VISTA</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
                <form>
                    <h6 className="footer-title">Newsletter</h6>
                    <h3 className="w-80">Keep up on our always evolving product features and technology. Enter your e-mail and subscribe to our newsletter.</h3>
                    <fieldset className="form-control w-80">
                        <label className="label">
                            <span className="label-text">Enter your email address</span>
                        </label>
                        <div className="join">
                            <input type="text" placeholder="username@site.com" className="input input-bordered join-item" />
                            <button className="btn btn-primary join-item">Subscribe</button>
                        </div>
                    </fieldset>
                </form>
            </footer>
        </div>
    );
};

export default Footer;
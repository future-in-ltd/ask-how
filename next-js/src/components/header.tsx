import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export function Header() {
	return (
		<header>
			<div className="container">
				<nav
					className="navbar navbar-expand-xl m-0"
					aria-label="Eleventh navbar example"
				>
					<div className="container-fluid">
						<Link className="navbar-brand" href="/">
							<Image src="/assets/images/logo.png" alt="" />
						</Link>
						<button
							className="navbar-toggler collapsed"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#nav"
							aria-controls="navbarsExample09"
							aria-expanded="false"
							aria-label="Toggle navigation"
						>
							<span className="navbar-toggler-icon"></span>
						</button>

						<div className="navbar-collapse collapse" id="nav">
							<ul className="navbar-nav me-auto mb-2 mb-lg-0">
								<li className="nav-item">
									<Link
										href="/"
										className="nav-link active"
										aria-current="page"
									>
										Home
									</Link>
								</li>
								<li className="nav-item">
									<Link className="nav-link" href="/school">
										School
									</Link>
								</li>
								<li className="nav-item">
									<Link className="nav-link" href="/how-works">
										How it works
									</Link>
								</li>
								<li className="nav-item">
									<Link className="nav-link" href="/blogs">
										Blog Page
									</Link>
								</li>
							</ul>
							<div className="header_buttons">
								<Link href="/sign-in">
									<button className="btn_border me-2">Sign in</button>
								</Link>

								<Link href="/request-demo">
									<button className="btn_main">Request Demo</button>
								</Link>
							</div>
						</div>
					</div>
				</nav>
			</div>
		</header>
	);
}

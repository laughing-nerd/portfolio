import React from "react";
import Image from "next/image";
import styles from "@/app/(PAGES)/about/page.module.css";

export default function Skills() {
	return (
		<ul className={styles.honeycomb}>
			<div className={styles.row1}>
				<li className={styles.honeycomb_cell}>
					<Image
						className={styles.honeycomb_cell_image}
						src="/skills/cpp.png"
						alt="Skill Image"
						width={220}
						height={220}
					/>
				</li>
				<li className={styles.honeycomb_cell}>
					<Image
						className={styles.honeycomb_cell_image}
						src="/skills/python.png"
						alt="Skill Image"
						width={220}
						height={220}
					/>
				</li>
				<li className={styles.honeycomb_cell}>
					<Image
						className={styles.honeycomb_cell_image}
						src="/skills/html5.png"
						alt="Skill Image"
						width={220}
						height={220}
					/>
				</li>
				<li className={styles.honeycomb_cell}>
					<Image
						className={styles.honeycomb_cell_image}
						src="/skills/css3.jpg"
						alt="Skill Image"
						width={220}
						height={220}
					/>
				</li>
			</div>

			<div className={styles.row2}>
				<li className={styles.honeycomb_cell}>
					<Image
						className={styles.honeycomb_cell_image}
						src="/skills/js.png"
						alt="Skill Image"
						width={220}
						height={220}
					/>
				</li>
				<li className={styles.honeycomb_cell}>
					<Image
						className={styles.honeycomb_cell_image}
						src="/skills/mongodb.png"
						alt="Skill Image"
						width={220}
						height={220}
					/>
				</li>
				<li className={styles.honeycomb_cell}>
					<Image
						className={styles.honeycomb_cell_image}
						src="/skills/express.png"
						alt="Skill Image"
						width={220}
						height={220}
					/>
				</li>
			</div>

			<div className={styles.row1}>
				<li className={styles.honeycomb_cell}>
					<Image
						className={styles.honeycomb_cell_image}
						src="/skills/react.png"
						alt="Skill Image"
						width={220}
						height={220}
					/>
				</li>
				<li className={styles.honeycomb_cell}>
					<Image
						className={styles.honeycomb_cell_image}
						src="/skills/next.png"
						alt="Skill Image"
						width={220}
						height={220}
					/>
				</li>

				<li className={styles.honeycomb_cell}>
					<Image
						className={styles.honeycomb_cell_image}
						src="/skills/node.png"
						alt="Skill Image"
						width={220}
						height={220}
					/>
				</li>
				<li className={styles.honeycomb_cell}>
					<Image
						className={styles.honeycomb_cell_image}
						src="/skills/linux.png"
						alt="Skill Image"
						width={220}
						height={220}
					/>
				</li>
			</div>
			<div className={styles.row2}>
				<li className={styles.honeycomb_cell}>
					<Image
						className={styles.honeycomb_cell_image}
						src="/skills/docker.png"
						alt="Skill Image"
						width={220}
						height={220}
					/>
				</li>

				<li className={styles.honeycomb_cell}>
					<Image
						className={styles.honeycomb_cell_image}
						src="/skills/git.png"
						alt="Skill Image"
						width={220}
						height={220}
					/>
				</li>
				<li className={styles.honeycomb_cell}>
					<Image
						className={styles.honeycomb_cell_image}
						src="/skills/github.png"
						alt="Skill Image"
						width={220}
						height={220}
					/>
				</li>
			</div>

			<li className={styles.honeycomb_hidden}></li>
		</ul>
	);
}

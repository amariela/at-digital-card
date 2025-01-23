import Picture from "./components/Picture";
import CustomButton from "./components/CustomButton";
import { Container, Col, Row } from "react-bootstrap";
import { Link } from "react-router";
import myInfo from "./components/Info";
import { motion } from "framer-motion";
import { containerVariants, itemVariants, socialIconVariants } from "./components/Animations";

export default function Home() {
    const homeBtnStyle = {
        width: "10rem",
        fontSize: "0.9rem",
        fontWeight: "800",
        padding: "12px",
        margin: "0rem 0.5rem",
    };

    const selfImageStyle = {
        borderRadius: "50%",
        width: "clamp(150px, 80%, 330px)",
    };

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <Container>
                <Row className="justify-content-center mb-4">
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{
                            duration: 0.6,
                            ease: "easeOut"
                        }}
                    >
                        <Picture
                            imageSrc="/assets/self_image.jpg"
                            altText="professional photo"
                            imageId="selfImage"
                            imageStyle={selfImageStyle}
                        />
                    </motion.div>
                </Row>
                <Row className="justify-content-center pb-5">
                    <motion.h4 variants={itemVariants}>
                        Hello, I'm
                    </motion.h4>
                    <motion.h1 variants={itemVariants} id="myName">
                        {`${myInfo.firstName} ${myInfo.lastName}`}
                    </motion.h1>
                    <motion.h4 variants={itemVariants} className="pb-3">
                        Full Stack Developer
                    </motion.h4>
                    <motion.div variants={itemVariants}>
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            role="button"
                            tabIndex="0"
                            href="/assets/AT_Resume_Jan2025.pdf"
                            id="downloadBtn"
                            className="btn btn-outline-dark rounded m-2"
                            style={homeBtnStyle}
                            target="_blank"
                        >
                            Download Resume
                        </motion.a>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            style={{ display: "inline-block" }}
                        >
                            <CustomButton
                                linkTo="/contact"
                                btnText="Contact Me"
                                btnId="contactBtn"
                                btnVariant="dark rounded"
                                btnStyle={homeBtnStyle}
                            />
                        </motion.div>
                    </motion.div>
                    <motion.div className="pt-3" aria-label="social-media-icons" variants={itemVariants}>
                        <Link
                            to="https://www.linkedin.com/in/aenateodocio/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <motion.i
                                variants={socialIconVariants}
                                whileHover="hover"
                                whileTap="tap"
                                className="bi bi-linkedin h2 pe-4 text-dark"
                            />
                        </Link>
                        <Link
                            to="https://github.com/ela-codes"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <motion.i
                                variants={socialIconVariants}
                                whileHover="hover"
                                whileTap="tap"
                                className="bi bi-github h2 text-dark"
                            />
                        </Link>
                    </motion.div>
                </Row>
            </Container>
        </motion.div>
    );
}
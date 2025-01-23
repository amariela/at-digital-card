import myInfo from "./components/Info";
import { Container, Col, Row } from "react-bootstrap";
import { motion } from "framer-motion";
import { containerVariants, itemVariants, socialIconVariants } from "./components/Animations";

export default function About() {
    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <Container>
                <Row className="flex-column justify-content-center align-items-center">
                    <Col>
                        <motion.h1 variants={itemVariants} id="titleName">
                            Meet {myInfo.firstName}.
                        </motion.h1>
                    </Col>
                    <Col lg={6}>
                        <motion.p variants={itemVariants}>
                            I'm a full stack developer with a love for bringing ideas to life through code.
                        </motion.p>
                        <motion.p variants={itemVariants}>
                            I've always been passionate about continuous learning and I enjoy exploring new technologies and integrating them into my projects. Really, my mission is to contribute to impactful projects while growing professionally. When I'm not coding, you'll find me <span className="text-decoration-line-through text-muted">sleeping</span> diving into new games, reading books, filming and editing videos, or discovering unique coffee shops.
                        </motion.p>
                        <Container className="pb-5">
                            <motion.p variants={itemVariants}>
                                Some of the tools I love to work with are:
                            </motion.p>
                            <motion.div variants={itemVariants}>
                                <motion.img 
                                    whileHover="hover"
                                    whileTap="tap"
                                    variants={socialIconVariants}
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg" 
                                    className="programmingIcons" 
                                />
                                <motion.img 
                                    whileHover="hover"
                                    whileTap="tap"
                                    variants={socialIconVariants}
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg" 
                                    className="programmingIcons" 
                                />
                                <motion.img 
                                    whileHover="hover"
                                    whileTap="tap"
                                    variants={socialIconVariants}
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" 
                                    className="programmingIcons" 
                                />
                                <motion.img 
                                    whileHover="hover"
                                    whileTap="tap"
                                    variants={socialIconVariants}
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original-wordmark.svg" 
                                    className="programmingIcons" 
                                />
                                <motion.img 
                                    whileHover="hover"
                                    whileTap="tap"
                                    variants={socialIconVariants}
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" 
                                    className="programmingIcons" 
                                />
                                <br />
                                <br />
                                <motion.img 
                                    whileHover="hover"
                                    whileTap="tap"
                                    variants={socialIconVariants}
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg" 
                                    className="programmingIcons" 
                                />
                                <motion.img 
                                    whileHover="hover"
                                    whileTap="tap"
                                    variants={socialIconVariants}
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original-wordmark.svg" 
                                    className="programmingIcons" 
                                />
                                <motion.img 
                                    whileHover="hover"
                                    whileTap="tap"
                                    variants={socialIconVariants}
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original-wordmark.svg" 
                                    className="programmingIcons" 
                                />
                            </motion.div>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </motion.div>
    );
}
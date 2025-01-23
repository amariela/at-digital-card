import { Container, ListGroup } from "react-bootstrap";
import { motion } from "framer-motion";
import myInfo from "./components/Info";
import { containerVariants, itemVariants, socialIconVariants } from "./components/Animations";

export default function Contact() {
    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <Container>
                <motion.h1 variants={itemVariants} id="titleName">
                    Let's connect!
                </motion.h1>
                <motion.p variants={itemVariants}>
                    I would love to hear from you.
                </motion.p>
                <motion.div variants={itemVariants}>
                    <ListGroup>
                        <motion.div variants={itemVariants}>
                            <ListGroup.Item>
                                <i className="bi bi-telephone-fill pe-2"></i>
                                <span className="align-middle">{myInfo.phoneNumber}</span>
                            </ListGroup.Item>
                        </motion.div>
                        
                        <motion.div variants={itemVariants}>
                            <ListGroup.Item>
                                <i className="bi bi-envelope-fill pe-2"></i>
                                <span className="align-middle">{myInfo.email}</span>
                            </ListGroup.Item>
                        </motion.div>
                        
                        <motion.div 
                            variants={itemVariants}
                            whileHover={socialIconVariants.hover}
                            whileTap={socialIconVariants.tap}
                        >
                            <ListGroup.Item>
                                <i className="bi bi-linkedin pe-2"></i>
                                <a href={myInfo.linkedIn} target="_blank" rel="noopener noreferrer">
                                    <span className="align-middle">LinkedIn Profile</span>
                                </a>
                            </ListGroup.Item>
                        </motion.div>
                        
                        <motion.div 
                            variants={itemVariants}
                            whileHover={socialIconVariants.hover}
                            whileTap={socialIconVariants.tap}
                        >
                            <ListGroup.Item>
                                <i className="bi bi-github pe-2"></i>
                                <a href={myInfo.gitHub} target="_blank" rel="noopener noreferrer">
                                    <span className="align-middle">GitHub Profile</span>
                                </a>
                            </ListGroup.Item>
                        </motion.div>
                    </ListGroup>
                </motion.div>
            </Container>
        </motion.div>
    );
}
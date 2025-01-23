const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.1,
            ease: "easeOut"
        }
    }
};

const itemVariants = {
    hidden: { y: 10, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            ease: "easeOut"
        }
    }
};

const socialIconVariants = {
    hover: {
        scale: 1.1,
        transition: {
            duration: 0.2,
            ease: "easeInOut"
        }
    },
    tap: {
        scale: 0.98
    }
};

export { containerVariants, itemVariants, socialIconVariants };
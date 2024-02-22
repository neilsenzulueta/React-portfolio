const styles = {
    footerStyle: {
        background: '#121212',
        height: '50px',
        display: 'flex',
        justifyContent: 'center', 
        alignItems: 'center', 
    },
    footerLinksStyle: {
        color: '#E0E0E0', 
        fontSize: '15px',
        padding: '0 15px', 
    },
};

function Footer() {
    return (
        <div style={styles.footerStyle}>
            <p style={styles.footerLinksStyle}>
                <a href="https://github.com/neilsenzulueta" target="_blank" rel="noopener noreferrer" style={{color: "white", textDecoration: "none"}}>GitHub</a> | 
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" style={{color: "white", textDecoration: "none"}}>LinkedIn</a> |
                <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" style={{color: "white", textDecoration: "none"}}>Twitter</a> 
            </p>
        </div>
    );
}

export default Footer;
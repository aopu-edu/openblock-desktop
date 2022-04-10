import React from 'react';
import {productName, version} from '../../package.json';

import logo from '../icon/OpenBlockDesktop.svg';
import styles from './about.css';

import {FormattedMessage} from 'react-intl';

const AboutElement = () => (
    <div className={styles.aboutBox}>
        <div><img
            alt={`${productName} icon`}
            src={logo}
            className={styles.aboutLogo}
        /></div>
        <div className={styles.aboutText}>
            <h2>{productName}</h2>
            Version {version}
            <table className={styles.aboutDetails}><tbody>
                {
                    ['Electron', 'Chrome', 'Node'].map(component => {
                        const componentVersion = process.versions[component.toLowerCase()];
                        return <tr key={component}><td>{component}</td><td>{componentVersion}</td></tr>;
                    })
                }
            </tbody></table>
            <h2 className={styles.aboutDetails}>
                <FormattedMessage
                    defaultMessage="This software is based on OpenBlock development."
                    description="Copyright of this software"
                    id="gui.about.copyright1"
                />
                <FormattedMessage
                    defaultMessage="And Openblock is based on Scratch."
                    description="Copyright of this software"
                    id="gui.about.copyright2"
                />
            </h2>
        </div>
    </div>
);

export default <AboutElement />;

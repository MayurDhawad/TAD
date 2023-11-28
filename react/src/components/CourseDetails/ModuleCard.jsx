import React, { useState } from 'react'
import { Collapse } from 'reactstrap';
import TopicCard from './TopicCard';

const ModuleCard = (props) => {
    const { module } = props;

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    return (
        <div>
            <div className={'toc-card module ' + (isOpen ? 'active' : '')} onClick={toggle}>{module.moduleName}</div>
            <Collapse isOpen={isOpen}>
                {
                    module.topics && module.topics.map((topic, index) => (
                        <TopicCard topic={topic} key={index} />
                    ))
                }
            </Collapse>

        </div>
    )
}

export default ModuleCard
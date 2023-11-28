import React, { useState } from 'react'
import { Collapse } from 'reactstrap';
import ChapterCard from './ChapterCard';

const TopicCard = (props) => {
    const { topic } = props;
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    return (
        <div>
            <div className={'toc-card topic ' + (isOpen ? 'active' : '')} onClick={toggle}>{topic.topicName}</div>
            <Collapse isOpen={isOpen}>
                {
                    topic.chapters && topic.chapters.map((chapter, index) => (
                        <ChapterCard key={index} chapter={chapter} />
                    ))
                }
            </Collapse>
        </div>
    )
}

export default TopicCard
import React from 'react'

const ChapterCard = (props) => {
    const {chapter} = props;
    return (
        <div className='toc-card chapter'>
            <img src={require('../../assets/images/icons/chapter.svg').default} alt="chp" />
            {chapter.chapterName}
        </div>
    )
}

export default ChapterCard
import React from 'react';
import {selectDirectorySections} from '../../redux/directory/directory.selectors'
import {createStructuredSelector} from 'reselect'
import MenuItem from '../menu-item/menu-item.component'
import './directory.styles.scss';
import { connect } from 'react-redux'


const Directory = ({sections}) => 

            <div className='directory-menu'>
                {sections.map(({id, ...othersectionProps }) => (
                        <MenuItem key={id} {...othersectionProps}/>

                    ))}

</div>
const mapStateToProps = state=>createStructuredSelector({
    sections: selectDirectorySections
})
        
export default connect(mapStateToProps)(Directory);
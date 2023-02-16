import * as React from 'react';
import Buttons from '../../components/Buttons/Buttons';
import Banner from '../../assets/image 2.svg'
import "./Publish.css"
import { HiPencilAlt } from 'react-icons/hi'
import { style } from '@mui/system';



interface IPublishProps {
}

const Publish: React.FunctionComponent<IPublishProps> = (props) => {
    return (
        <>
            <div className="publish">
                <div className="publish-container">


                    <div className='publish-confirmation'>
                        <div className="publish-details">
                            <h2 className="publish-details-conf">Confirmation Details</h2>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                        </div>

                        <div className="publish-edit">
                            <Buttons
                                content={'Edit'}
                                height={''}
                                width={''}
                                styleType='secondary'
                                icon={< HiPencilAlt style={{ color: 'black', marginRight: "1rem" }} />}
                                onClick={function (): void {
                                    throw new Error('Function not implemented.');
                                }} />
                            <a href="">View all Event created</a>
                        </div>
                    </div>
                    <hr />
                    <div className="publish-body">
                        <div className="publish-head publishfirst">
                            <h3>Event Title</h3>
                            <p>Eko All Night Pool Party Festival</p>
                        </div>
                        <div className="publish-head">
                            <h3>Organizer</h3>
                            <p>ACMA people's platform</p>
                        </div>
                        <div className="publish-head">
                            <h3>Ticket Class</h3>
                            <p>VVIP, VIP & Regular</p>
                        </div>
                        <div className="publish-head">
                            <h3>Category</h3>
                            <p>Event & Lifestyle</p>
                        </div>
                        <div className="publish-head">
                            <h3>Banner</h3>
                            <img src={Banner} alt="" />
                        </div>
                        <div className="publish-head">
                            <h3>Location</h3>
                            <p>2b, Herbert Macaulay Road, Yaba, Lagos</p>
                        </div>
                        <div className="publish-head last">
                            <h3>Date&Time</h3>
                            <p>22/12/2023 - 31/2/2022</p>
                            <p>06:00PM - 07:00PM</p>

                        </div>

                        <Buttons
                            content={"Send & Publish"}
                            height={'8vh'}
                            width={'86vw'}
                            onClick={function (): void {
                                throw new Error('Function not implemented.');
                            }} />
                        <p className='publish-space'>

                        </p>
                    </div>
                </div>
            </div>

        </>

    );
};

export default Publish;

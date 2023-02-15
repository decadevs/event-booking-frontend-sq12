import { Link } from "react-router-dom";
import "./eventDetails.css";
import EventImg from "../../assets/eventImg.jpg";
import Button from "../../components/Buttons/Buttons";
import Card from "../../components/eventCard";
import MapImg from "../../assets/map.png";
import Image from "../../assets/events.png";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import { FiFacebook } from "react-icons/fi";
import { AiOutlineTwitter } from "react-icons/ai";

const EventDetails = () => {
  return (
    <>
      <div className="event-main">
        <div className="event-overlay"></div>
        <img className="eventimg" src={EventImg} alt="event image" />
        <div className="event-content">
          <div className="event-main-h-div">
            <h1 className="event-main-h">
              Eko All Night Pool <br /> Party Festival
            </h1>
            <p className="event-main-p ">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet
              aspernatur voluptatibus, dolore atque numquam veritatis numquam
            </p>
          </div>

          <div className="all-cards">
            <Card>
              <h4 className="date-time">Date & Time</h4>
              <p className="event-card-date">
                Saturday, Nov 06, 2021 at 20:30pm
              </p>
              <p></p>

              <div>
                <p className="add-calender">+ Add to Calender</p>
              </div>

              <div className="buy-btn-ticket-div">
                <div className="buy-btn-ticket">
                  <Button
                    content={"Buy Ticket"}
                    height={"54px"}
                    width={"330px"}
                    styleType={"primary"}
                    onClick={function (): void {
                      throw new Error("Function not implemented.");
                    }}
                  />
                </div>
                <Button
                  content={"Save Ticket"}
                  height={"54px"}
                  width={"330px"}
                  styleType={"secondary"}
                  onClick={function (): void {
                    throw new Error("Function not implemented.");
                  }}
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
      <section className="section-div">
        <div className="description-event-div">
          <div className="description-div">
            <h3 className="description-subhead">Description</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur, minima. Doloremque ipsum aut suscipit perferendis
              corporis repudiandae accusantium explicabo laudantium repellendus
              quos, praesentium culpa officia voluptatem maxime fugiat. Nihil
              non re facilis asperiores dolores veritatis quia voluptates
              simorro libero! Asperiores totam aliquam minus atque pariatur
              debitis molestias placeat, doloribus molestiae, unde qui quasi
              expedita odit ut similique, velit minima. Sed nesciunt, corporis
              ratione fugiat est eaque molestiae alias molestias soluta impedit
              distinctio fugit quis quibusdam quasi magni eum minima veniam
              neque! Debitis, ipsum obcaecati quaerat accusamus optio nulla
              voluptate accusantium. Deserunt, enim, accusantium reprehenderit a
              odio voluptatem eligendi eum ex aut, repellendus officia! Ea
              blanditiis hic similique dolores ad voluptatibus unde fugiat
              voluptas dolor odio, deserunt nam doloribus nulla! Consectetur
              nihil unde totam repellat natus minima voluptatibus enim
              blanditiis deleniti. Quam esse expedita tempore possimus dolore ad
              asperiores nam accusantium aliquid reiciendis illo nesciunt ab
              consectetur animi assumenda tempora eligendi nemo voluptate,
              similique ipsa saepe atque. Tempora sit debitis autem, laborum
              ullam, repudiandae, officia eos molestias corrupti unde aspernatur
              incidunt ab provident ea ut asperiores maiores blanditiis
              explicabo distinctio est in consectetur. Illo, ab rem, labore m
              itaque, expedita esse voluptatum tempore, autem porro optio
              recusandae obcaecati id quod ipsam reprehenderit. Ipsa porro unde
              totam quibusdam illo magnam quas laudantium sapiente eos. N velit,
              quos deserunt. Totam tempore sequi quis cupiditate hic voluptatem
              mollitia repudiandae fuga nobis consequatur voluptate dolore ab
              nemo illo soluta maxime provident voluptatibus aperiam veritatis,
              repellendus iste, quod quo eos deleniti. Quidem esse voluptates
              quaerat totam blanditiis tempore sit veritatis at delectus vel
              neque, obcaecati ab, iusto quis aliquam? Excepturi, sunt! Natus
              maiores praesentium voluptatum quas qui velit vitae dolorum,
              officiis illum, non laudantium ea iste dolores doloremque minima.
              Perspiciatis culpa possimus labore facilis, facere sit molestias
              quidem, voluptatum harum, ut commodi voluptas. Magnam, doloremque,
              ratione nostrum molestiae debitis officiis a iusto trum. Eveniet
              labore cumque quae iste numquam sequi nulla nisi?
            </p>
            <h4 className="date-time-subhead">Date & time</h4>
            <div className="date-event-div">
              <div>
                <h5 className="date-time-subhead-h5">StartDate</h5>
                <p className="date-time-subhead-p">09/06/2022</p>
              </div>
              <div>
                <h5 className="date-time-subhead-h5">EndDate</h5>
                <p className="date-time-subhead-p">09/06/2022</p>
              </div>
              <div>
                <h5 className="date-time-subhead-h5">Time</h5>
                <p className="date-time-subhead-p">09/06/2022</p>
              </div>
            </div>
          </div>

          <div className="event-div">
            <h3 className="description-subhead">Event Location</h3>
            <div>
              <img className="map" src={MapImg} alt="map" />
              <div className="social-div">
                <h4 className="social-icon-text">Share with Friends</h4>
                <div className="social-icon-div">
                  <div className="social-icon">
                    <FaInstagram />
                  </div>
                  <div className="social-icon">
                    <FiFacebook />
                  </div>
                  <div className="social-icon">
                    <AiOutlineTwitter />
                  </div>
                  <div className="social-icon">
                    <FaYoutube />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="how-contact-organizer">
          <h2 className="how-contact-organizer-h2">
            How to contact the Organizer
          </h2>
          <p>
            please visits{" "}
            <span className="contact-address">
              http://bookevent.com/contact-us{" "}
            </span>
            or refer to the FAQ section for all questions
          </p>
          <h3 className="how-contact-organizer-h3">
            Other event you might like
          </h3>
        </div>

        <div className="event-cards">
          <Card>
            <img src={Image} alt="" />
            <div className="event-card">
              <div className="event-card-p-div">
                <p>
                  <span className="event-card-p"> oct </span>
                  <br />
                  28
                </p>
              </div>
              <div className="event-card-text">
                <h5 className="event-card-h5">
                  Eko Nigt Festival Of Pool Party
                </h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Obcaecati id rem labore deleniti libero nostrum?
                </p>
              </div>
            </div>
          </Card>

          <Card>
            <img src={Image} alt="" />
            <div className="event-card">
              <div className="event-card-p-div">
                <p>
                  <span className="event-card-p"> oct </span>
                  <br />
                  28
                </p>
              </div>
              <div className="event-card-text">
                <h5 className="event-card-h5">
                  Eko Nigt Festival Of Pool Party
                </h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Obcaecati id rem labore deleniti libero nostrum?
                </p>
              </div>
            </div>
          </Card>
          <Card>
            <img src={Image} alt="" />
            <div className="event-card">
              <div className="event-card-p-div">
                <p>
                  <span className="event-card-p"> oct </span>
                  <br />
                  28
                </p>
              </div>
              <div className="event-card-text">
                <h5 className="event-card-h5">
                  Eko Nigt Festival Of Pool Party
                </h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Obcaecati id rem labore deleniti libero nostrum?
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </>
  );
};

export default EventDetails;

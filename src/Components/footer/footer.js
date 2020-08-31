import React from "react"
import { Layout } from "antd"
import './footer.css'
import { MailOutlined, MailFilled, PhoneOutlined, PhoneFilled, HomeFilled, HomeOutlined } from '@ant-design/icons';
import {
  useHistory
} from "react-router-dom";

const { Footer } = Layout;

function MyFooter(props) {
  let history = useHistory()
  return (
    <Footer>
      <div className="site-footer"
      >
        <div className="container-footer">
          <div className="row">
            <div className="col-sm-12 col-md-6 division-class">
              <h6
              >Description</h6>
              <p className="text-justify">Although Socio-Linkage is a joined start-up by a group of three profound and vigorous colleagues who decided to pull off a platform where everyone irrespective of cultural, social or sectarian differences can find the most sustainable ways to fix their problems.
However, each of these three conspired different areas of working that together became a wholesome aspiration of yielding Socio-linkage as a forum for helping people.</p>
            </div>

            <div className="col-xs-6 col-md-3 division-class">
              <h6
              >Quick Links</h6>
              <ul className="footer-links"
              >
                <li><a onClick={() => history.push("/")}>Home</a></li>
                <li><a onClick={() => history.push("/about")}>About Us</a></li>
                <li><a onClick={() => history.push("/services")}>Our Services</a></li>
                <li><a onClick={() => history.push("/blogs")}>Blogs</a></li>
                <li><a onClick={() => history.push("/contact")}>Contact Us</a></li>
              </ul>
            </div>
            <div className="col-xs-6 col-md-3 division-class">
              <h6
              >Contact With Us</h6>
              <ul className="footer-links"
              >
                <li>
                  <a href="mailto:SOCIOLINKAGE@GMAIL.COM" target="_blank" >
                    <MailOutlined />
                    <div className="h4Class"> SOCIOLINKAGE@GMAIL.COM</div>
                  </a>
                </li>
                <li>
                  <a className="anchorChildEff" title="+923333466728" href="tel:+923333466728" target="_blank" >
                    <PhoneOutlined />
                    <div className="h4Class"> +923333466728</div>
                  </a>
                </li>
                <li>
                  <div title="Fl-No. C-22, Nazish Heaven, Saqib Shaheed Road, Block-11, Gulshan-e-Iqbal, Karachi.">
                    <div className="anchorChildEff" title="Fl-No. C-22, Nazish Heaven, Saqib Shaheed Road, Block-11, Gulshan-e-Iqbal, Karachi.">
                      <a href="https://www.google.com/maps/place/Nazish+Heaven+Apartments,/@24.919258,67.1022525,15z/data=!4m12!1m6!3m5!1s0x0:0xff16601aa1e9c0c0!2sNazish+Heaven+Apartments,!8m2!3d24.919258!4d67.1022525!3m4!1s0x0:0xff16601aa1e9c0c0!8m2!3d24.919258!4d67.1022525" target="_blank" title="Fl-No. C-22, Nazish Heaven, Saqib Shaheed Road, Block-11, Gulshan-e-Iqbal, Karachi." >
                        <HomeFilled />
                        <div className="h4Class"> Fl-No. C-22, Nazish Heaven, Saqib Shaheed Road, Block-11, Gulshan-e-Iqbal, Karachi.</div>
                      </a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <hr />
        </div>
        <div className="container-footer">
          <div className="row1">
            <div className="col-md-8 col-sm-6 col-xs-12">
              <p className="copyright-text">&copy; 2020 All Rights Reserved by
            <a> Socio-Linkage</a>
            <br/>
              <a className="linkClass" onClick={() => history.push("/T&C")}>Terms & Conditions</a> &nbsp;&nbsp;
                <a className="linkClass" onClick={() => history.push("/PrivacyPolicy")}>Privacy Policy</a>
            </p>
            </div>
            <div className="col-md-3 col-sm-4 col-xs-8">
              <ul className="social-icons">
                <li><a href="https://www.facebook.com/Sociolinkage20" target="_blank" className="facebook"><i className="fa fa-facebook"></i></a></li>
                <li><a href="https://twitter.com/LinkageSocio" target="_blank" className="twitter"><i className="fa fa-twitter"></i></a></li>
                <li><a className="whatsapp" href="https://wa.me/923333466728" target="_blank"><i className="fa fa-whatsapp"></i></a></li>
                <li><a className="linkedin" href="https://www.linkedin.com/in/socio-linkage-5720bb1b0/" target="_blank"><i className="fa fa-linkedin"></i></a></li>
                <li><a className="instagram" href="https://www.instagram.com/sociolinkage/" target="_blank"><i className="fa fa-instagram"></i></a></li>
                <li><a className="youtube" href="https://www.youtube.com/channel/UCYJ_C5vcn24jKeO7ZJ0K8xw" target="_blank"><i className="fa fa-youtube"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Footer>
  )
}

export default MyFooter
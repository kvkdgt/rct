import React, { useEffect, useState } from "react";
import "./Homepage.css";
import { Link } from "react-router-dom";
import img1 from "../../assets/1.jpeg";
import img2 from "../../assets/2.jpeg";
import img3 from "../../assets/3.jpeg";
import img4 from "../../assets/4.jpeg";

const Homepage = () => {
  return (
    <div style={{ marginTop: "80px" }}>
      <div className="homepage">
        <div className="hero">
          <div className="left-hero">
            <img
              src="https://www.clearbrookinc.com/wp-content/uploads/2016/11/drug-addiction.jpg"
              style={{ width: "100%" }}
              alt=""
            />
          </div>
          <div className="right-hero">
            <div className="header-hero baloo-bhai">
              શું તમે દારૂ/શરાબથી પરેશાન છો?
            </div>
            <hr style={{ width: "50%" }} />
            <div className="sub-header-hero baloo-bhai">
              {" "}
              તો આજે જ અમારા સેન્ટરની મુલાકાત લો. દારૂ, ગાંજો, ચરસ તથા ડ્રગ અને
              કોઈપણ પ્રકારનો નશો છોડાવતું એક માત્ર કેંદ્ર એટલે Real Change
              Trust.
            </div>
          </div>
        </div>

        <div className="vision-content">
          <p className="vision-content-main">
            Welcome to Real Change Trust, where hope finds a home and
            transformation begins. Our vision at Real Change Trust is to create
            a haven of healing for those battling alcohol addiction, fostering a
            community where every individual can reclaim their life and
            rediscover the joy of sober living.
          </p>
          <div className="sub-content">
            <div className="sub-content-left">
              <div className="heading-sub-content">Our Vision:</div>
              <div className="content-sub-content">
                At Real Change Trust, we envision a world where the grip of
                alcohol addiction is replaced by the embrace of hope,
                resilience, and recovery. Our vision is to be a beacon of light
                for individuals and families affected by alcohol dependency,
                offering a comprehensive and compassionate approach to
                rehabilitation.
              </div>

              <div className="heading-sub-content">A Pathway to Freedom:</div>
              <div className="content-sub-content">
                Our commitment is to provide a holistic and personalized
                rehabilitation experience, guiding individuals through a
                transformative journey towards sobriety. We believe in
                addressing the root causes of addiction, empowering individuals
                to break free from the chains of alcohol dependency and rebuild
                their lives.
              </div>

              <div className="heading-sub-content">Breaking Stigmas:</div>
              <div className="content-sub-content">
                We envision a world free from the stigmas associated with
                addiction, where seeking help is seen as an act of strength and
                courage. By promoting education and awareness, Real Change Trust
                aims to break down barriers and create a society that supports
                those in recovery.
              </div>
            </div>
            <div className="sub-content-left">
              <div className="heading-sub-content">Compassionate Care:</div>
              <div className="content-sub-content">
                At the heart of our vision is a dedication to compassionate
                care. We understand that every person is unique, and so are
                their struggles with addiction. Real Change Trust's team of
                experienced and empathetic professionals is devoted to creating
                a supportive and non-judgmental environment, where individuals
                feel heard, understood, and encouraged on their path to
                recovery.
              </div>

              <div className="heading-sub-content">Empowering Lives:</div>
              <div className="content-sub-content">
                We aspire to empower lives by equipping individuals with the
                tools, skills, and resilience needed to overcome alcohol
                addiction. Through evidence-based therapies, counseling, and
                support groups, we aim to instill a sense of purpose,
                self-discovery, and renewed hope in every person who walks
                through the doors of Real Change Trust.
              </div>
              <div className="heading-sub-content">
                Community and Connection:
              </div>
              <div className="content-sub-content">
                Recovery is not a solitary journey, and at Real Change Trust, we
                emphasize the importance of community and connection. Our vision
                includes fostering a sense of belonging, where individuals can
                share their experiences, learn from one another, and build
                lasting connections that extend beyond their time at the center.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;

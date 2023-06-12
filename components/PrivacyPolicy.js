import React from 'react'
import styles from '@/styles/Home.module.css';
import Link from 'next/link';

function PrivacyPolicy() {
  return (
    <>
        <div className={styles.privacy_body}>
            <p className={styles.privacy_title}>PRIVACY POLICY</p>
            <p className={styles.privacy_subtitle}>Last updated June 12, 2023</p>

            <p className={styles.privacy_body_text}>This privacy notice for Bulls and Barber
                Bulls and Barber, we, us, or our, describes how and why we might collect, store, use and/or share process
                 your information when you use our services Services, such as when you:
            </p>

            <ul className={styles.privacy_ul}>
                <li><p className={styles.privacy_body_text}>Visit our website at <a href="https://bullsandbarber.vercel.app" className={styles.privacy_link}>Bulls and Barber</a> , or any website of ours that links to this privacy notice </p></li>
                <li><p className={styles.privacy_body_text}>Download and use our mobile application  Bulls and Barber), or any other application of ours that links to this privacy notice</p></li>
                <li><p className={styles.privacy_body_text}>Engage with us in other related ways, including any sales, marketing, or events</p></li>
            </ul>

            <p className={styles.privacy_title}>Questions or concerns?</p>
            <p className={styles.privacy_body_text}>Reading this privacy notice will help you understand your privacy rights and choices. If you do not agree with our policies and practices, please do not use our Services</p>

            <p className={styles.privacy_heading_1}>SUMMARY OF KEY POINTS</p>
       
            <p className={styles.privacy_body_text}><i>This summary provides key points from our privacy notice, but you can find out more details about any of these topics by clicking the link following each key point or by using our table of contents table of contents below to find the section you are looking for.</i></p>


            <p className={styles.privacy_title}>What personal information do we process?</p>
            <p className={styles.privacy_body_text}>When you visit, use, or navigate our Services, we may process personal information depending on how you interact with Bulls and Barber and the Services, the choices you make, and the products and features you use. Learn more about personal information you disclose to us.</p>

            <p className={styles.privacy_title}>Do we process any sensitive personal information?</p>
            <p className={styles.privacy_body_text}>We do not process sensitive personal information.</p>

            <p className={styles.privacy_title}>Do we receive any information from third parties?</p>
            <p className={styles.privacy_body_text}>We do not receive any information from third parties.</p>


            <p className={styles.privacy_title}>How do we process your information?</p>
            <p className={styles.privacy_body_text}>We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent. We process your information only when we have a valid legal reason to do so. Learn more about how we process your information.</p>

            
            <p className={styles.privacy_title}>How do we keep your information safe?</p>
            <p className={styles.privacy_body_text}>We have organisational and technical processes and procedures in place to protect your personal information. However, no electronic transmission over the internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorised third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information. Learn more about how we keep your information safe</p>

            <p className={styles.privacy_title}>What are your rights?</p>
            <p className={styles.privacy_body_text}>Depending on where you are located geographically, the applicable privacy law may mean you have certain rights regarding your personal information. Learn more about your privacy rights.</p>

            <p className={styles.privacy_title}>How do you exercise your rights? </p>
            <p className={styles.privacy_body_text}>The easiest way to exercise your rights is by submitting a data subject access request, or by contacting us. We will consider and act upon any request in accordance with applicable data protection laws.</p>
            <p className={styles.privacy_body_text}>Want to learn more about what Bulls and Barber does with any information we collect? Review the privacy notice in full</p>


            <p className={styles.privacy_heading_1}>TABLE OF CONTENTS</p>
            <ol className={styles.privacy_ul}>
              <li><p className={styles.privacy_body_text}>WHAT INFORMATION DO WE COLLECT?</p></li>
              <li><p className={styles.privacy_body_text}>HOW DO WE PROCESS YOUR INFORMATION?</p></li>
              <li><p className={styles.privacy_body_text}>WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</p></li>
              <li><p className={styles.privacy_body_text}>HOW LONG DO WE KEEP YOUR INFORMATION?</p></li>
              <li><p className={styles.privacy_body_text}>HOW DO WE KEEP YOUR INFORMATION SAFE?</p></li>
              <li><p className={styles.privacy_body_text}>DO WE COLLECT INFORMATION FROM MINORS?</p></li>
              <li><p className={styles.privacy_body_text}>WHAT ARE YOUR PRIVACY RIGHTS?</p></li>
              <li><p className={styles.privacy_body_text}>CONTROLS FOR DO-NOT-TRACK FEATURES</p></li>
              <li><p className={styles.privacy_body_text}>DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</p></li>
              <li><p className={styles.privacy_body_text}>DO WE MAKE UPDATES TO THIS NOTICE?</p></li>
              <li><p className={styles.privacy_body_text}>HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</p></li>
              <li><p className={styles.privacy_body_text}>HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</p></li>
            
            </ol>

            <p className={styles.privacy_heading_1}>1. WHAT INFORMATION DO WE COLLECT?</p>
            <p className={styles.privacy_heading_2}>Personal information you disclose to us</p>
            <p className={styles.privacy_body_text}><strong>In Short:</strong> We collect personal information that you provide to us.</p>
            <p className={styles.privacy_body_text}>We collect personal information that you voluntarily provide to us when you register on the Services, express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services, or otherwise when you contact us.</p>
            <p className={styles.privacy_body_text}><strong>Personal Information Provided by You.</strong>The personal information that we collect depends on the context of your interactions with us and the Services, the choices you make, and the products and features you use. The personal information we collect may include the following:</p>
            <ul className={styles.privacy_ul}>
              <li>names</li>
              <li>email addresses</li>
              <li>passwords</li>
            </ul>
            <p className={styles.privacy_body_text}><strong>Sensitive Information.</strong>We do not process sensitive information.</p>
            <p className={styles.privacy_body_text}><strong>Application Data.</strong>If you use our applications, we also may collect the following information if you choose to provide us with access or permission:</p>
            <ul className={styles.privacy_ul}>
              <li>Mobile Device Access. We may request access or permission to certain features from your mobile device, including your mobile device`&apos;`s notification permissions, and other features. If you wish to change our access or permissions, you may do so in your device`&apos;`s settings.</li>
              <li>Push Notifications. We may request to send you push notifications regarding your account or certain features of the applications. If you wish to opt out from receiving these types of communications, you may turn them off in your device`&apos;`s settings.</li>
            </ul>
            <p className={styles.privacy_body_text}>This information is primarily needed to maintain the security and operation of our applications, for troubleshooting, and for our internal analytics and reporting purposes.</p>
            <p className={styles.privacy_body_text}>All personal information that you provide to us must be true, complete, and accurate, and you must notify us of any changes to such personal information.</p>



            <p className={styles.privacy_heading_1}>2. HOW DO WE PROCESS YOUR INFORMATION?</p>
            <p className={styles.privacy_body_text}><strong>In short:</strong>We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent.</p>
            <p className={styles.privacy_body_text}><strong>We process your personal information for a variety of reasons, depending on how you interact with our Services, including:</strong></p>
            <ul className={styles.privacy_ul}>
              <li>To facilitate account creation and authentication and otherwise manage user accounts. We may process your information so you can create and log in to your account, as well as keep your account in working order.</li>
              <li>To provide users with rewards . Basically users email is used as an identification so that the admin of the application can add rewards for the purchases they did in the physical store.</li>
            </ul>

            <p className={styles.privacy_heading_1}>3. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</p>
            <p className={styles.privacy_body_text}><strong>In short:</strong>We may share information in specific situations described in this section and/or with the following third parties.</p>
            <p className={styles.privacy_body_text}>We may need to share your personal information in the following situations:</p>
            <ul className={styles.privacy_ul}>
              <li>Business Transfers. We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</li>
              <li>Offer Wall. Our applications may display a third-party hosted `&apos;`offer wall`&apos;`. Such an offer wall allows third-party advertisers to offer virtual currency, gifts, or other items to users in return for the acceptance and completion of an advertisement offer. Such an offer wall may appear in our applications and be displayed to you based on certain data, such as your geographic area or demographic information. When you click on an offer wall, you will be brought to an external website belonging to other persons and will leave our applications. A unique identifier, such as your user ID, will be shared with the offer wall provider in order to prevent fraud and properly credit your account with the relevant reward.</li>
            </ul>

            <p className={styles.privacy_heading_1}>4. HOW LONG DO WE KEEP YOUR INFORMATION?</p>
            <p className={styles.privacy_body_text}>We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy notice, unless a longer retention period is required or permitted by law such as tax, accounting, or other legal requirements. No purpose in this notice will require us keeping your personal information for longer than the period of time in which users have an account with us.</p>
            <p className={styles.privacy_body_text}>When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymise such information, or, if this is not possible 
            for example, because your personal information has been stored in backup archives, then we will securely store your personal information and isolate it from any further processing until deletion is possible.</p>
           

            <p className={styles.privacy_heading_1}>5. HOW DO WE KEEP YOUR INFORMATION SAFE?</p>
            <p className={styles.privacy_body_text}><strong>In Short: </strong>We aim to protect your personal information through a system of organisational and technical security measures.</p>
            <p className={styles.privacy_body_text}>We have implemented appropriate and reasonable technical and organisational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorised third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information. Although we will do our best to protect your personal information, transmission of personal information to and from our Services is at your own risk. You should only access the Services within a secure environment.</p>
        

            <p className={styles.privacy_heading_1}>6. DO WE COLLECT INFORMATION FROM MINORS?</p>
            <p className={styles.privacy_body_text}><strong>In Short: </strong>We do not knowingly collect data from or market to children under 18 years of age.</p>
            <p className={styles.privacy_body_text}>We do not knowingly solicit data from or market to children under 18 years of age. By using the Services, you represent that you are at least 18 or that you are the parent or guardian of such a minor and consent to such minor dependent`&apos;`s use of the Services. If we learn that personal information from users less than 18 years of age has been collected, we will deactivate the account and take reasonable measures to promptly delete such data from our records.</p>
        

            <p className={styles.privacy_heading_1}>7. WHAT ARE YOUR PRIVACY RIGHTS?</p>
            <p className={styles.privacy_body_text}><strong>In Short: </strong>You may review, change, or terminate your account at any time.</p>
            <p className={styles.privacy_body_text}>If you are located in Switzerland, you may contact the Federal Data Protection and Information Commissioner.</p>
            <p className={styles.privacy_body_text}>Withdrawing your consent: If we are relying on your consent to process your personal information, which may be express and/or implied consent depending on the applicable law, you have the right to withdraw your consent at any time. You can withdraw your consent at any time by contacting us by using the contact details provided in the section `&apos;`HOW CAN YOU CONTACT US ABOUT THIS NOTICE?`&apos;` below.</p>
            <p className={styles.privacy_body_text}>However, please note that this will not affect the lawfulness of the processing before its withdrawal nor, when applicable law allows, will it affect the processing of your personal information conducted in reliance on lawful processing grounds other than consent.</p>
            <p className={styles.privacy_body_text}>Opting out of marketing and promotional communications: You can unsubscribe from our marketing and promotional communications at any time by Clicking on Notifications off, or by contacting us using the details provided in the section `&apos;`HOW CAN YOU CONTACT US ABOUT THIS NOTICE?`&apos;` below. You will then be removed from the marketing lists. However, we may still communicate with you — for example, to send you service-related messages that are necessary for the administration and use of your account, to respond to service requests, or for other non-marketing purposes.</p>
            <p className={styles.privacy_heading_2}>Account Information</p>
            <p className={styles.privacy_body_text}>If you would at any time like to review or change the information in your account or terminate your account, you can:</p>
            <ul className={styles.privacy_ul}>
              <li>Contact us using the contact information provided.</li>
              <li>Please contact Shop`&apos;`s Owner for the deletion of your account</li>
            </ul>
            <p className={styles.privacy_body_text}>Upon your request to terminate your account, we will deactivate or delete your account and information from our active databases. However, we may retain some information in our files to prevent fraud, troubleshoot problems, assist with any investigations, enforce our legal terms and/or comply with applicable legal requirements.</p>

            <p className={styles.privacy_heading_1}>8. CONTROLS FOR DO-NOT-TRACK FEATURES</p>
            <p className={styles.privacy_body_text}>Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track DNT feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. At this stage no uniform technology standard for recognising and implementing DNT signals has been finalised. As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online. If a standard for online tracking is adopted that we must follow in the future, we will inform you about that practice in a revised version of this privacy notice.</p>
      

            <p className={styles.privacy_heading_1}>9. DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</p>
            <p className={styles.privacy_body_text}><strong>In Short: </strong>Yes, if you are a resident of California, you are granted specific rights regarding access to your personal information.</p>
            <p className={styles.privacy_body_text}>California Civil Code Section 1798.83, also known as the Shine The Light law, permits our users who are California residents to request and obtain from us, once a year and free of charge, information about categories of personal information if any we disclosed to third parties for direct marketing purposes and the names and addresses of all third parties with which we shared personal information in the immediately preceding calendar year. If you are a California resident and would like to make such a request, please submit your request in writing to us using the contact information provided below.

If you are under 18 years of age, reside in California, and have a registered account with Services, you have the right to request removal of unwanted data that you publicly post on the Services. To request removal of such data, please contact us using the contact information provided below and include the email address associated with your account and a statement that you reside in California. We will make sure the data is not publicly displayed on the Services, but please be aware that the data may not be completely or comprehensively removed from all our systems e.g. backups, etc..</p>
           

            <p className={styles.privacy_heading_1}>10. DO WE MAKE UPDATES TO THIS NOTICE?</p>
            <p className={styles.privacy_body_text}><strong>In Short: </strong>Yes, we will update this notice as necessary to stay compliant with relevant laws.</p>
            <p className={styles.privacy_body_text}>We may update this privacy notice from time to time. The updated version will be indicated by an updated Revised date and the updated version will be effective as soon as it is accessible. If we make material changes to this privacy notice, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification. We encourage you to review this privacy notice frequently to be informed of how we are protecting your information.</p>
         

            <p className={styles.privacy_heading_1}>11. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</p>
            <p className={styles.privacy_body_text}>If you have questions or comments about this notice, you may email us at <i>TBD</i> or contact us by post at:</p>
            <p className={styles.privacy_body_text}>Bulls and Barber
محمع دبي للإستثمار 1 - Dubai - United Arab Emirates
__________
United Arab Emirates</p>
           

            <p className={styles.privacy_heading_1}>12. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</p>
            <p className={styles.privacy_body_text}>You have the right to request access to the personal information we collect from you, change that information, or delete it. To request to review, update, or delete your personal information, please fill out and submit a data subject access request.</p>
            <p className={styles.privacy_body_text}>You have the right to request access to the personal information we collect from you, change that information, or delete it. To request to review, update, or delete your personal information, please fill out and submit a data subject access request.</p>
  
        </div>
    </>
  )
}

export default PrivacyPolicy
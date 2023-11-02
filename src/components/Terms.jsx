import React from 'react';

const TermsAndConditions = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <>
      <div
        onClick={onClose}
        className="inset-0 w-full h-full flex justify-center items-center text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-pink-600 to-purple-400 z-10 terms p-4 font-mono"
      >
        <div
          className="md:w-[50%] max-h-[80vh] items-center justify-center text-left"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <h1 className="text-center font-bold text-4xl text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-pink-600 to-purple-400 title">
            Terms and Conditions
          </h1>
          &nbsp;
          <p className="text-lg text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-pink-600 to-purple-400">
            <p className="italic">
              The Terms and Conditions were last updated on June 10, 2023
            </p>
            <h1 className="text-2xl font-bold py-4">1. Introduction</h1>
            <p>
              These Terms and conditions apply to this website and to the
              transactions related to our products and services. You may be
              bound by additional contracts related to your relationship with us
              or any products or services that you receive from us. If any
              provisions of the additional contracts conflict with any
              provisions of these Terms, the provisions of these additional
              contracts will control and prevail.
            </p>
            <h1 className="text-2xl font-bold py-4">2. Binding</h1>
            <p className="text-justify">
              By registering with, accessing, or otherwise using this website,
              you hereby agree to be bound by these Terms and conditions set
              forth below. The mere use of this website implies the knowledge
              and acceptance of these Terms and conditions. In some particular
              cases, we can also ask you to explicitly agree.
            </p>
            <h1 className="text-2xl font-bold py-4">
              3. Electronic communication
            </h1>
            <p className="text-justify">
              By using this website or communicating with us by electronic
              means, you agree and acknowledge that we may communicate with you
              electronically on our website or by sending an email to you, and
              you agree that all agreements, notices, disclosures, and other
              communications that we provide to you electronically satisfy any
              legal requirement, including but not limited to the requirement
              that such communications should be in writing.
            </p>
            <h1 className="text-2xl font-bold py-4">
              4. Intellectual property
            </h1>
            <p className="text-justify">
              We or our licensors own and control all of the copyright and other
              intellectual property rights in the website and the data,
              information, and other resources displayed by or accessible within
              the website. 4.1 All the rights are reserved Unless specific
              content dictates otherwise, you are not granted a license or any
              other right under Copyright, Trademark, Patent, or other
              Intellectual Property Rights. This means that you will not use,
              copy, reproduce, perform, display, distribute, embed into any
              electronic medium, alter, reverse engineer, decompile, transfer,
              download, transmit, monetize, sell, market, or commercialize any
              resources on this website in any form, without our prior written
              permission, except and only insofar as otherwise stipulated in
              regulations of mandatory law (such as the right to quote).
            </p>
            <h1 className="text-2xl font-bold py-4">5. Third-party property</h1>
            <p className="text-justify">
              Our website may include hyperlinks or other references to other
              party’s websites. We do not monitor or review the content of other
              party’s websites which are linked to from this website. Products
              or services offered by other websites shall be subject to the
              applicable Terms and Conditions of those third parties. Opinions
              expressed or material appearing on those websites are not
              necessarily shared or endorsed by us. We will not be responsible
              for any privacy practices or content of these sites. You bear all
              risks associated with the use of these websites and any related
              third-party services. We will not accept any responsibility for
              any loss or damage in whatever manner, however caused, resulting
              from your disclosure to third parties of personal information.
            </p>
            <h1 className="text-2xl font-bold py-4">6. Responsible use</h1>
            <p className="text-justify">
              By visiting our website, you agree to use it only for the purposes
              intended and as permitted by these Terms, any additional contracts
              with us, and applicable laws, regulations, and generally accepted
              online practices and industry guidelines. You must not use our
              website or services to use, publish or distribute any material
              which consists of (or is linked to) malicious computer software;
              use data collected from our website for any direct marketing
              activity, or conduct any systematic or automated data collection
              activities on or in relation to our website. Engaging in any
              activity that causes, or may cause, damage to the website or that
              interferes with the performance, availability, or accessibility of
              the website is strictly prohibited.
            </p>
            <h1 className="text-2xl font-bold py-4">
              7. Content posted by you
            </h1>
            <p className="text-justify">
              We may provide various open communication tools on our website,
              such as blog comments, blog posts, forums, message boards, ratings
              and reviews, and various social media services. It might not be
              feasible for us to screen or monitor all content that you or
              others may share or submit on or through our website. However, we
              reserve the right to review the content and to monitor all use of
              and activity on our website, and remove or reject any content in
              our sole discretion. By posting information or otherwise using any
              open communication tools as mentioned, you agree that your content
              will comply with these Terms and Conditions and must not be
              illegal or unlawful or infringe any person’s legal rights.
            </p>
            <h1 className="text-2xl font-bold py-4">8. Idea submission</h1>
            <p className="text-justify">
              Do not submit any ideas, inventions, works of authorship, or other
              information that can be considered your own intellectual property
              that you would like to present to us unless we have first signed
              an agreement regarding the intellectual property or a
              non-disclosure agreement. If you disclose it to us absent such
              written agreement, you grant to us a worldwide, irrevocable,
              non-exclusive, royalty-free license to use, reproduce, store,
              adapt, publish, translate and distribute your content in any
              existing or future media.
            </p>
            <h1 className="text-2xl font-bold py-4">9. Termination of use</h1>
            <p className="text-justify">
              We may, in our sole discretion, at any time modify or discontinue
              access to, temporarily or permanently, the website or any Service
              thereon. You agree that we will not be liable to you or any third
              party for any such modification, suspension or discontinuance of
              your access to, or use of, the website or any content that you may
              have shared on the website. You will not be entitled to any
              compensation or other payment, even if certain features, settings,
              and/or any Content you have contributed or have come to rely on,
              are permanently lost. You must not circumvent or bypass, or
              attempt to circumvent or bypass, any access restriction measures
              on our website.
            </p>
            <h1 className="text-2xl font-bold py-4">
              10. Warranties and liability
            </h1>
            <p className="text-justify">
              Nothing in this section will limit or exclude any warranty implied
              by law that it would be unlawful to limit or to exclude. This
              website and all content on the website are provided on an “as is”
              and “as available” basis and may include inaccuracies or
              typographical errors. We expressly disclaim all warranties of any
              kind, whether express or implied, as to the availability,
              accuracy, or completeness of the Content. We make no warranty
              that: this website or our content will meet your requirements;
              this website will be available on an uninterrupted, timely,
              secure, or error-free basis. Nothing on this website constitutes
              or is meant to constitute, legal, financial or medical advice of
              any kind. If you require advice you should consult an appropriate
              professional. The following provisions of this section will apply
              to the maximum extent permitted by applicable law and will not
              limit or exclude our liability in respect of any matter which it
              would be unlawful or illegal for us to limit or to exclude our
              liability. In no event will we be liable for any direct or
              indirect damages (including any damages for loss of profits or
              revenue, loss or corruption of data, software or database, or loss
              of or harm to property or data) incurred by you or any third
              party, arising from your access to, or use of, our website. Except
              to the extent any additional contract expressly states otherwise,
              our maximum liability to you for all damages arising out of or
              related to the website or any products and services marketed or
              sold through the website, regardless of the form of legal action
              that imposes liability (whether in contract, equity, negligence,
              intended conduct, tort or otherwise) will be limited to the total
              price that you paid to us to purchase such products or services or
              use the website. Such limit will apply in the aggregate to all of
              your claims, actions and causes of action of every kind and
              nature.
            </p>
            <h1 className="text-2xl font-bold py-4">11. Privacy</h1>
            <p className="text-justify">
              To access our website and/or services, you may be required to
              provide certain information about yourself as part of the
              registration process. You agree that any information you provide
              will always be accurate, correct, and up to date. We have
              developed a policy to address any privacy concerns you may have.
              For more information, please see our Privacy Statement and our
              Cookie Policy.
            </p>
            <h1 className="text-2xl font-bold py-4">12. Accessibility</h1>
            <p className="text-justify">
              We are committed to making the content we provide accessible to
              individuals with disabilities. If you have a disability and are
              unable to access any portion of our website due to your
              disability, we ask you to give us a notice including a detailed
              description of the issue you encountered. If the issue is readily
              identifiable and resolvable in accordance with industry-standard
              information technology tools and techniques we will promptly
              resolve it.
            </p>
            <h1 className="text-2xl font-bold py-4">
              13. Export restrictions / Legal compliance
            </h1>
            <p className="text-justify">
              Access to the website from territories or countries where the
              Content or purchase of the products or Services sold on the
              website is illegal is prohibited. You may not use this website in
              violation of export laws and regulations of United Kingdom.
            </p>
            <h1 className="text-2xl font-bold py-4">14. Assignment</h1>
            <p className="text-justify">
              You may not assign, transfer or sub-contract any of your rights
              and/or obligations under these Terms and conditions, in whole or
              in part, to any third party without our prior written consent. Any
              purported assignment in violation of this Section will be null and
              void.
            </p>
            <h1 className="text-2xl font-bold py-4">
              15. Breaches of these Terms and conditions
            </h1>
            <p className="text-justify">
              Without prejudice to our other rights under these Terms and
              Conditions, if you breach these Terms and Conditions in any way,
              we may take such action as we deem appropriate to deal with the
              breach, including temporarily or permanently suspending your
              access to the website, contacting your internet service provider
              to request that they block your access to the website, and/or
              commence legal action against you.
            </p>
            <h1 className="text-2xl font-bold py-4">16. Indemnification</h1>
            <p className="text-justify">
              You agree to indemnify, defend and hold us harmless, from and
              against any and all claims, liabilities, damages, losses and
              expenses, relating to your violation of these Terms and
              conditions, and applicable laws, including intellectual property
              rights and privacy rights. You will promptly reimburse us for our
              damages, losses, costs and expenses relating to or arising out of
              such claims.
            </p>
            <h1 className="text-2xl font-bold py-4">17. Waiver</h1>
            <p className="text-justify">
              Failure to enforce any of the provisions set out in these Terms
              and Conditions and any Agreement, or failure to exercise any
              option to terminate, shall not be construed as waiver of such
              provisions and shall not affect the validity of these Terms and
              Conditions or of any Agreement or any part thereof, or the right
              thereafter to enforce each and every provision
            </p>
            <h1 className="text-2xl font-bold py-4">18. Language</h1>
            <p className="text-justify">
              These Terms and Conditions will be interpreted and construed
              exclusively in English. All notices and correspondence will be
              written exclusively in that language.
            </p>
            <h1 className="text-2xl font-bold py-4">19. Entire agreement</h1>
            <p className="text-justify">
              These Terms and Conditions, together with our privacy statement
              and cookie policy, constitute the entire agreement between you and
              Arcadius Games in relation to your use of this website.
            </p>
            <h1 className="text-2xl font-bold py-4">
              20. Updating of these Terms and conditions
            </h1>
            <p className="text-justify">
              We may update these Terms and Conditions from time to time. It is
              your obligation to periodically check these Terms and Conditions
              for changes or updates. The date provided at the beginning of
              these Terms and Conditions is the latest revision date. Changes to
              these Terms and Conditions will become effective upon such changes
              being posted to this website. Your continued use of this website
              following the posting of changes or updates will be considered
              notice of your acceptance to abide by and be bound by these Terms
              and Conditions.
            </p>
            <h1 className="text-2xl font-bold py-4">
              21. Choice of Law and Jurisdiction
            </h1>
            <p className="text-justify">
              These Terms and Conditions shall be governed by the laws of United
              Kingdom. Any disputes relating to these Terms and Conditions shall
              be subject to the jurisdiction of the courts of United Kingdom. If
              any part or provision of these Terms and Conditions is found by a
              court or other authority to be invalid and/or unenforceable under
              applicable law, such part or provision will be modified, deleted
              and/or enforced to the maximum extent permissible so as to give
              effect to the intent of these Terms and Conditions. The other
              provisions will not be affected.
            </p>
            <h1 className="text-2xl font-bold py-4">22. Contact information</h1>
            <p className="text-justify">
              This website is owned and operated by Arcadius Games. You may
              contact us regarding these Terms and Conditions by writing or
              contacting us{' '}
              <a href="">
                <span className="font-extrabold">here</span>
              </a>
            </p>
          </p>
          <div className="md:w-[25%] mx-auto p-4">
            <button
              className="bg-gradient-to-r from-pink-600  to-purple-400 px-4 py-2 m-2 rounded-lg hover:scale-105 duration-300"
              onClick={onClose}
            >
              <div className=" "></div>
              <span className="text-2xl font-extrabold text-[#0a192f] from-pink-400 via-fuchsia-500">
                Close
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TermsAndConditions;

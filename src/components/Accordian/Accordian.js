import "./Accordian.scss";

export let Accordian = ()=>{
    let faqOpen = (abcd, event)=>{
      let getclick = "#"+abcd;
      let rowref = document.querySelector(getclick);

      rowref.classList.add("active");

        //console.dir(event.currentTarget.parentNode.parentNode.childNodes);
        for(let mm of event.currentTarget.parentNode.parentNode.childNodes){   
            if(mm !== rowref ){
              mm.classList.remove("active");
            }
        }
    }

    return(
        <div className="faqAccordion">
          <div className="faqRow active" id="panel1">
            <div className="faqTitle" onClick={(event)=> faqOpen('panel1', event)}>
              <h4>I am a teacher, can I link my profile on Siila to my website? How?</h4>
              <button type="button">+</button>
            </div>
            <div className="faqContent">
              <p>Yes, you can create your and your center’s profile by clicking <a href="/user/share">here</a> You can
                add images / videos / PDFs / audios related to your center with ease. The platform allows you to
                promote all your social networks and diffuse the information through your events.</p>
            </div>
          </div>
          <div className="faqRow" id="panel2">
             <div className="faqTitle" onClick={(event)=> faqOpen('panel2', event)}>
              <h4>Will the material I upload be available for everyone to view on the platform?</h4>
              <button type="button">+</button>
            </div>

            <div className="faqContent">
              <p>All material uploaded to Siila will be instantly shared globally and it will be available to view on
                Siila. You can also keep those documents saved in your own <a
                  href="/user/favourite-wisdom-library">multimedia library</a> on your profile.</p>
            </div>
          </div>

          <div className="faqRow"  id="panel3">
            <div className="faqTitle" onClick={(event)=> faqOpen('panel3', event)}>
              <h4>Can anyone create an event?</h4>
              <button type="button">+</button>
            </div>

            <div className="faqContent">
              <p>Yes, anyone and everyone can create an event and enjoy this amazing tool on Siila. One can organise
                yoga events, online yoga classNamees, online meditation techniques, teacher training and many other
                events. One can also create a social gathering to simply discuss your practices, techniques and
                philosophies with your peers and friends. Check out all types of <a href="/user/event">events</a> that
                you can create on Siila.</p>
            </div>
          </div>
        </div>
    )
}
import React, { Component } from 'react';
import { Card, Divider } from 'semantic-ui-react'
import './../css/footer.css';

class Footer1 extends Component {
  render() {
    return (
      <footer>
        <Divider />
        <Card.Meta className='copyright' textAlign='center'>
          Copyright 2018 - Trevis India - All Rights Reserved.
          </Card.Meta>
        <blockquote className='thirukural-container'>
          <div className='inTamil thirukural-body'>
            <div>குறள் 489:</div>
            <div>எய்தற் கரிய தியைந்தக்கால் அந்நிலையே</div>
            <div>செய்தற் கரிய செயல்</div>
            <div>&nbsp;</div>
            <div className='margin1'>அடைவதற்கு அரியதை அடைவதற்கு ஏற்ற காலம் வந்து விட்டால் அப்பொழுதே தான் செய்வதற்கு அரிய செயல்களைச் செய்து கொள்க.</div>
          </div>
          <div className='inEnglish thirukural-body'>
            <div>Tirukural Couplet 489:</div>
            <div>When hardest gain of opportunity at last is won,</div>
            <div>With promptitude let hardest deed be done.</div>
          </div>
        </blockquote>
      </footer>
    );
  }
}

export default Footer1;

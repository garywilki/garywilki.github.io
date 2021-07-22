function adjustRating(xValue) {
    
    let membershipLevels = ["Non-profit","Bronze","Silver","Gold"];

    let description = [];

    description.push("This is a discounted membership rate for nonprofit 501(c)3 charitable organizations and provides Bronze level benefits including: company directory listing, annual social media event promotion, and subscriber-exclusive networking and training seminars.");

    description.push("Bronze level benefits are an excellent step forward for any small business.  Membership will add credibility to your business, increase referrals and networking opportunities, and provide additional platform for consumers to view and rate your business.  Benefits include: company directory listing, annual social media event promotion, and subscriber-exclusive networking and training seminars.");

    description.push("Silver level benefits are great for a business eager to grow.  In addition to all Bronze level benefits, Silver benefits will include higher directory listings, front-page highlights, monthly event promotions.");

    description.push("Gold level benefits will take your business to the next level.  In addition to all Bronze and Silver benefits, Gold level benefits will provide maximum frequency of front-page highlights, front-page directory listings, bi-weekly event promotion, and annual luncheon tickets.");

    document.getElementById('ratingvalue').innerText = membershipLevels[xValue-1];

    document.querySelector(".jMembershipDescription").innerText = description[xValue-1];
  }

adjustRating(document.querySelector(".jMembershipSlider").value);
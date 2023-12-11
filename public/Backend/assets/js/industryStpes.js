let indistary = document.getElementById('organizerSingle');

let servidesContainer = document.getElementById('servidesContainer');

class domId {
  constructor(domEle) {
    return document.getElementById(domEle);
  }
}

let servicest = [...document.getElementsByName('selectServices')];

// =======1.1=========
let s1_1 = new domId('1.1');
let s1_2 = new domId('1.2');
let s1_3 = new domId('1.3');
let s1_4 = new domId('1.4');
let s1_5 = new domId('1.5');
let s1_6 = new domId('1.6');
let s1_7 = new domId('1.7');
let s1_8 = new domId('1.8');
// =======1.2=========
let s2_1 = new domId('2.1');
let s2_2 = new domId('2.2');
let s2_3 = new domId('2.3');
let s2_4 = new domId('2.4');
let s2_5 = new domId('2.5');
let s2_6 = new domId('2.6');
let s2_7 = new domId('2.7');
let s2_8 = new domId('2.8');
// =======3.2=========
let s3_1 = new domId('3.1');
let s3_2 = new domId('3.2');
let s3_3 = new domId('3.3');
let s3_4 = new domId('3.4');
let s3_5 = new domId('3.5');
let s3_6 = new domId('3.6');
let s3_7 = new domId('3.7');
let s3_8 = new domId('3.8');
// =======3.2=========
let s4_1 = new domId('4.1');
let s4_2 = new domId('4.2');
let s4_3 = new domId('4.3');
let s4_4 = new domId('4.4');
let s4_5 = new domId('4.5');
let s4_6 = new domId('4.6');
let s4_7 = new domId('4.7');
let s4_8 = new domId('4.8');
// =======5.2=========
let s5_1 = new domId('5.1');
let s5_2 = new domId('5.2');
let s5_3 = new domId('5.3');
let s5_4 = new domId('5.4');
let s5_5 = new domId('5.5');
let s5_6 = new domId('5.6');
let s5_7 = new domId('5.7');
let s5_8 = new domId('5.8');
// =======5.2=========
let s6_1 = new domId('6.1');
let s6_2 = new domId('6.2');
let s6_3 = new domId('6.3');
let s6_4 = new domId('6.4');
let s6_5 = new domId('6.5');
let s6_6 = new domId('6.6');
let s6_7 = new domId('6.7');
let s6_8 = new domId('6.8');

// ============================NS1.1=============
// ============================NS1.1=============
let nestedSecurity_1 = new domId('nestedSecurity_1');
let nestedSecurity_2 = new domId('nestedSecurity_2');
let nestedSecurity_3 = new domId('nestedSecurity_3');
let nestedSecurity_4 = new domId('nestedSecurity_4');

// ============================NS2.2=============
let nS2_1 = new domId('NS2_1');
let nS2_2 = new domId('NS2_2');
let nS2_3 = new domId('NS2_3');
let nS2_4 = new domId('NS2_4');
// ============================NS2.3=============
let nS3_1 = new domId('NS3_1');
let nS3_2 = new domId('NS3_2');
let nS3_3 = new domId('NS3_3');
let nS3_4 = new domId('NS3_4');
// ============================NS2.4=============
let nS4_1 = new domId('NS4_1');
let nS4_2 = new domId('NS4_2');
let nS4_3 = new domId('NS4_3');
let nS4_4 = new domId('NS4_4');
// ============================NS2.5=============
let nS5_1 = new domId('NS5_1');
let nS5_2 = new domId('NS5_2');
let nS5_3 = new domId('NS5_3');
let nS5_4 = new domId('NS5_4');
// ============================NS2.6=============
let nS6_1 = new domId('NS6_1');
let nS6_2 = new domId('NS6_2');
let nS6_3 = new domId('NS6_3');
let nS6_4 = new domId('NS6_4');

// ========================*********************
// ========================*********************
let NSecurity_1 = new domId('NSecurity_1');
let NSecurity_2 = new domId('NSecurity_2');
let NSecurity_3 = new domId('NSecurity_3');
let NSecurity_4 = new domId('NSecurity_4');
// ====
let nSS2_1 = new domId('nSS2_1');
let nSS2_2 = new domId('nSS2_2');
let nSS2_3 = new domId('nSS2_3');
let nSS2_4 = new domId('nSS2_4');
// ====
let nSS3_1 = new domId('nSS3_1');
let nSS3_2 = new domId('nSS3_2');
let nSS3_3 = new domId('nSS3_3');
let nSS3_4 = new domId('nSS3_4');
// ====
let nSS4_1 = new domId('nSS4_1');
let nSS4_2 = new domId('nSS4_2');
let nSS4_3 = new domId('nSS4_3');
let nSS4_4 = new domId('nSS4_4');
// ====
let nSS5_1 = new domId('nSS5_1');
let nSS5_2 = new domId('nSS5_2');
let nSS5_3 = new domId('nSS5_3');
let nSS5_4 = new domId('nSS5_4');
// ====
let nSS6_1 = new domId('nSS6_1');
let nSS6_2 = new domId('nSS6_2');
let nSS6_3 = new domId('nSS6_3');
let nSS6_4 = new domId('nSS6_4');

//  Nested 3 here
//  Nested 3 here
let N1 = new domId('N1_Environmental');
let N2 = new domId('N2_Environmental');
let N3 = new domId('N3_Environmental');
let N4 = new domId('N4_Environmental');
let N5 = new domId('N5_Environmental');
let N6 = new domId('N6_Environmental');
let N7 = new domId('N7_Environmental');
// ======N21==========
let N21 = new domId('N21_Environmental');
let N22 = new domId('N22_Environmental');
let N23 = new domId('N23_Environmental');
let N24 = new domId('N24_Environmental');
let N25 = new domId('N25_Environmental');
let N26 = new domId('N26_Environmental');
let N27 = new domId('N27_Environmental');
// ======N21==========
let N31 = new domId('N31_Environmental');
let N32 = new domId('N32_Environmental');
let N33 = new domId('N33_Environmental');
let N34 = new domId('N34_Environmental');
let N35 = new domId('N35_Environmental');
let N36 = new domId('N36_Environmental');
let N37 = new domId('N37_Environmental');
// ======N21==========
let N41 = new domId('N41_Environmental');
let N42 = new domId('N42_Environmental');
let N43 = new domId('N43_Environmental');
let N44 = new domId('N44_Environmental');
let N45 = new domId('N45_Environmental');
let N46 = new domId('N46_Environmental');
let N47 = new domId('N47_Environmental');
// ======N21==========
let N51 = new domId('N51_Environmental');
let N52 = new domId('N52_Environmental');
let N53 = new domId('N53_Environmental');
let N54 = new domId('N54_Environmental');
let N55 = new domId('N55_Environmental');
let N56 = new domId('N56_Environmental');
let N57 = new domId('N57_Environmental');
// ======N21==========
let N61 = new domId('N61_Environmental');
let N62 = new domId('N62_Environmental');
let N63 = new domId('N63_Environmental');
let N64 = new domId('N64_Environmental');
let N65 = new domId('N65_Environmental');
let N66 = new domId('N66_Environmental');
let N67 = new domId('N67_Environmental');

// NC1==========
// NC1==========
let NC1 = new domId('NC1_Environmental');
let NC2 = new domId('NC2_Environmental');
let NC3 = new domId('NC3_Environmental');
let NC4 = new domId('NC4_Environmental');
let NC5 = new domId('NC5_Environmental');
let NC6 = new domId('NC6_Environmental');
let NC7 = new domId('NC7_Environmental');
// NC2==========
let NC21 = new domId('NC21_Environmental');
let NC22 = new domId('NC22_Environmental');
let NC23 = new domId('NC23_Environmental');
let NC24 = new domId('NC24_Environmental');
let NC25 = new domId('NC25_Environmental');
let NC26 = new domId('NC26_Environmental');
let NC27 = new domId('NC27_Environmental');
// NC2==========
let NC31 = new domId('NC31_Environmental');
let NC32 = new domId('NC32_Environmental');
let NC33 = new domId('NC33_Environmental');
let NC34 = new domId('NC34_Environmental');
let NC35 = new domId('NC35_Environmental');
let NC36 = new domId('NC36_Environmental');
let NC37 = new domId('NC37_Environmental');
// NC2==========
let NC41 = new domId('NC41_Environmental');
let NC42 = new domId('NC42_Environmental');
let NC43 = new domId('NC43_Environmental');
let NC44 = new domId('NC44_Environmental');
let NC45 = new domId('NC45_Environmental');
let NC46 = new domId('NC46_Environmental');
let NC47 = new domId('NC47_Environmental');
// NC2==========
let NC51 = new domId('NC51_Environmental');
let NC52 = new domId('NC52_Environmental');
let NC53 = new domId('NC53_Environmental');
let NC54 = new domId('NC54_Environmental');
let NC55 = new domId('NC55_Environmental');
let NC56 = new domId('NC56_Environmental');
let NC57 = new domId('NC57_Environmental');
// NC2==========
let NC61 = new domId('NC61_Environmental');
let NC62 = new domId('NC62_Environmental');
let NC63 = new domId('NC63_Environmental');
let NC64 = new domId('NC64_Environmental');
let NC65 = new domId('NC65_Environmental');
let NC66 = new domId('NC66_Environmental');
let NC67 = new domId('NC67_Environmental');

indistary.addEventListener('change', function () {
  servicest.map((item) => (item.checked = false));

  if (indistary.value === '1') {
    servidesContainer.classList.add('showThis');

    servicest.map((items) => {
      items.addEventListener('change', (e) => {
        e.target.value === 'Inspections' && indistary.value === '1'
          ? e.target.checked
            ? s1_1.classList.add('showThis')
            : s1_1.classList.remove('showThis')
          : s1_1.classList.remove('showThis');

        e.target.value === 'Assessment' && indistary.value === '1'
          ? e.target.checked
            ? s1_2.classList.add('showThis')
            : s1_2.classList.remove('showThis')
          : s1_2.classList.remove('showThis');

        e.target.value === 'Security' && indistary.value === '1'
          ? e.target.checked
            ? s1_3.classList.add('showThis')
            : s1_3.classList.remove('showThis')
          : s1_3.classList.remove('showThis');

        e.target.value === 'Environmental' && indistary.value === '1'
          ? e.target.checked
            ? s1_4.classList.add('showThis')
            : s1_4.classList.remove('showThis')
          : s1_4.classList.remove('showThis');

        e.target.value === 'Specific' && indistary.value === '1'
          ? e.target.checked
            ? s1_5.classList.add('showThis')
            : s1_5.classList.remove('showThis')
          : s1_5.classList.remove('showThis');

        e.target.value === 'Certifications' && indistary.value === '1'
          ? e.target.checked
            ? s1_6.classList.add('showThis')
            : s1_6.classList.remove('showThis')
          : s1_6.classList.remove('showThis');

        e.target.value === 'Environment' && indistary.value === '1'
          ? e.target.checked
            ? s1_7.classList.add('showThis')
            : s1_7.classList.remove('showThis')
          : s1_7.classList.remove('showThis');

        e.target.value === 'Training' && indistary.value === '1'
          ? e.target.checked
            ? s1_8.classList.add('showThis')
            : s1_8.classList.remove('showThis')
          : s1_8.classList.remove('showThis');
      });
    });

    nestedSecurity_1.addEventListener('change', () => {
      if (nestedSecurity_1.checked) {
        NSecurity_1.classList.add('showThis');
      } else {
        NSecurity_1.classList.remove('showThis');
      }
    });
    nestedSecurity_2.addEventListener('change', () => {
      if (nestedSecurity_2.checked) {
        NSecurity_2.classList.add('showThis');
      } else {
        NSecurity_2.classList.remove('showThis');
      }
    });
    nestedSecurity_3.addEventListener('change', () => {
      if (nestedSecurity_3.checked) {
        NSecurity_3.classList.add('showThis');
      } else {
        NSecurity_3.classList.remove('showThis');
      }
    });
    nestedSecurity_4.addEventListener('change', () => {
      if (nestedSecurity_4.checked) {
        NSecurity_4.classList.add('showThis');
      } else {
        NSecurity_4.classList.remove('showThis');
      }
    });

    // neste 3 Three ==========
    N1.addEventListener('change', () => {
      N1.checked
        ? NC1.classList.add('showThis')
        : NC1.classList.remove('showThis');
    });
    N2.addEventListener('change', () =>
      N2.checked
        ? NC2.classList.add('showThis')
        : NC2.classList.remove('showThis')
    );
    N3.addEventListener('change', () =>
      N3.checked
        ? NC3.classList.add('showThis')
        : NC3.classList.remove('showThis')
    );
    N4.addEventListener('change', () =>
      N4.checked
        ? NC4.classList.add('showThis')
        : NC4.classList.remove('showThis')
    );
    N5.addEventListener('change', () =>
      N5.checked
        ? NC5.classList.add('showThis')
        : NC5.classList.remove('showThis')
    );
    N6.addEventListener('change', () =>
      N6.checked
        ? NC6.classList.add('showThis')
        : NC6.classList.remove('showThis')
    );
    N7.addEventListener('change', () =>
      N7.checked
        ? NC7.classList.add('showThis')
        : NC7.classList.remove('showThis')
    );

    // ========End=========
  }

  // ===========N1==============

  if (indistary.value === '2') {
    servidesContainer.classList.add('showThis');

    [...servicest].forEach((items) => {
      items.addEventListener('change', (e) => {
        e.target.value === 'Inspections' && indistary.value === '2'
          ? e.target.checked
            ? s2_1.classList.add('showThis')
            : s2_1.classList.remove('showThis')
          : s2_1.classList.remove('showThis');

        e.target.value === 'Assessment' && indistary.value === '2'
          ? e.target.checked
            ? s2_2.classList.add('showThis')
            : s2_2.classList.remove('showThis')
          : s2_2.classList.remove('showThis');

        e.target.value === 'Security' && indistary.value === '2'
          ? e.target.checked
            ? s2_3.classList.add('showThis')
            : s2_3.classList.remove('showThis')
          : s2_3.classList.remove('showThis');

        e.target.value === 'Environmental' && indistary.value === '2'
          ? e.target.checked
            ? s2_4.classList.add('showThis')
            : s2_4.classList.remove('showThis')
          : s2_4.classList.remove('showThis');

        e.target.value === 'Specific' && indistary.value === '2'
          ? e.target.checked
            ? s2_5.classList.add('showThis')
            : s2_5.classList.remove('showThis')
          : s2_5.classList.remove('showThis');

        e.target.value === 'Certifications' && indistary.value === '2'
          ? e.target.checked
            ? s2_6.classList.add('showThis')
            : s2_6.classList.remove('showThis')
          : s2_6.classList.remove('showThis');

        e.target.value === 'Environment' && indistary.value === '2'
          ? e.target.checked
            ? s2_7.classList.add('showThis')
            : s2_7.classList.remove('showThis')
          : s2_7.classList.remove('showThis');

        e.target.value === 'Training' && indistary.value === '2'
          ? e.target.checked
            ? s2_8.classList.add('showThis')
            : s2_8.classList.remove('showThis')
          : s2_8.classList.remove('showThis');
      });
    });

    nS2_1.addEventListener('change', () => {
      if (nS2_1.checked) {
        nSS2_1.classList.add('showThis');
      } else {
        nSS2_1.classList.remove('showThis');
      }
    });
    nS2_2.addEventListener('change', () => {
      if (nS2_1.checked) {
        nSS2_2.classList.add('showThis');
      } else {
        nSS2_2.classList.remove('showThis');
      }
    });
    nS2_3.addEventListener('change', () => {
      if (nS2_1.checked) {
        nSS2_3.classList.add('showThis');
      } else {
        nSS2_3.classList.remove('showThis');
      }
    });
    nS2_4.addEventListener('change', () => {
      if (nS2_1.checked) {
        nSS2_4.classList.add('showThis');
      } else {
        nSS2_4.classList.remove('showThis');
      }
    });

    // neste 3 Three ==========
    N21.addEventListener('change', () => {
      N21.checked
        ? NC21.classList.add('showThis')
        : NC21.classList.remove('showThis');
    });
    N22.addEventListener('change', () =>
      N22.checked
        ? NC22.classList.add('showThis')
        : NC22.classList.remove('showThis')
    );
    N23.addEventListener('change', () =>
      N23.checked
        ? NC23.classList.add('showThis')
        : NC23.classList.remove('showThis')
    );
    N24.addEventListener('change', () =>
      N24.checked
        ? NC24.classList.add('showThis')
        : NC24.classList.remove('showThis')
    );
    N25.addEventListener('change', () =>
      N25.checked
        ? NC25.classList.add('showThis')
        : NC25.classList.remove('showThis')
    );
    N26.addEventListener('change', () =>
      N26.checked
        ? NC26.classList.add('showThis')
        : NC26.classList.remove('showThis')
    );
    N27.addEventListener('change', () =>
      N27.checked
        ? NC27.classList.add('showThis')
        : NC27.classList.remove('showThis')
    );
  }

  // ===========3********
  if (indistary.value === '3') {
    servidesContainer.classList.add('showThis');

    [...servicest].forEach((items) => {
      items.addEventListener('change', (e) => {
        e.target.value === 'Inspections' && indistary.value === '3'
          ? e.target.checked
            ? s3_1.classList.add('showThis')
            : s3_1.classList.remove('showThis')
          : s3_1.classList.remove('showThis');

        e.target.value === 'Assessment' && indistary.value === '3'
          ? e.target.checked
            ? s3_2.classList.add('showThis')
            : s3_2.classList.remove('showThis')
          : s3_2.classList.remove('showThis');

        e.target.value === 'Security' && indistary.value === '3'
          ? e.target.checked
            ? s3_3.classList.add('showThis')
            : s3_3.classList.remove('showThis')
          : s3_3.classList.remove('showThis');

        e.target.value === 'Environmental' && indistary.value === '3'
          ? e.target.checked
            ? s3_4.classList.add('showThis')
            : s3_4.classList.remove('showThis')
          : s3_4.classList.remove('showThis');

        e.target.value === 'Specific' && indistary.value === '3'
          ? e.target.checked
            ? s3_5.classList.add('showThis')
            : s3_5.classList.remove('showThis')
          : s3_5.classList.remove('showThis');

        e.target.value === 'Certifications' && indistary.value === '3'
          ? e.target.checked
            ? s3_6.classList.add('showThis')
            : s3_6.classList.remove('showThis')
          : s3_6.classList.remove('showThis');

        e.target.value === 'Environment' && indistary.value === '3'
          ? e.target.checked
            ? s3_7.classList.add('showThis')
            : s3_7.classList.remove('showThis')
          : s3_7.classList.remove('showThis');

        e.target.value === 'Training' && indistary.value === '3'
          ? e.target.checked
            ? s3_8.classList.add('showThis')
            : s3_8.classList.remove('showThis')
          : s3_8.classList.remove('showThis');
      });
    });

    nS3_1.addEventListener('change', () => {
      if (nS3_1.checked) {
        nSS3_1.classList.add('showThis');
      } else {
        nSS3_1.classList.remove('showThis');
      }
    });
    nS3_2.addEventListener('change', () => {
      if (nS3_2.checked) {
        nSS3_2.classList.add('showThis');
      } else {
        nSS3_2.classList.remove('showThis');
      }
    });
    nS3_3.addEventListener('change', () => {
      if (nS3_3.checked) {
        nSS3_3.classList.add('showThis');
      } else {
        nSS3_3.classList.remove('showThis');
      }
    });
    nS3_4.addEventListener('change', () => {
      if (nS3_4.checked) {
        nSS3_4.classList.add('showThis');
      } else {
        nSS3_4.classList.remove('showThis');
      }
    });

    // neste 3 Three ==========
    N31.addEventListener('change', () => {
      N31.checked
        ? NC31.classList.add('showThis')
        : NC31.classList.remove('showThis');
    });
    N32.addEventListener('change', () =>
      N32.checked
        ? NC32.classList.add('showThis')
        : NC32.classList.remove('showThis')
    );
    N33.addEventListener('change', () =>
      N33.checked
        ? NC33.classList.add('showThis')
        : NC33.classList.remove('showThis')
    );
    N34.addEventListener('change', () =>
      N34.checked
        ? NC34.classList.add('showThis')
        : NC34.classList.remove('showThis')
    );
    N35.addEventListener('change', () =>
      N35.checked
        ? NC35.classList.add('showThis')
        : NC35.classList.remove('showThis')
    );
    N36.addEventListener('change', () =>
      N36.checked
        ? NC36.classList.add('showThis')
        : NC36.classList.remove('showThis')
    );
    N37.addEventListener('change', () =>
      N37.checked
        ? NC37.classList.add('showThis')
        : NC37.classList.remove('showThis')
    );
  }

  // ===========4********
  if (indistary.value === '4') {
    servidesContainer.classList.add('showThis');

    [...servicest].forEach((items) => {
      items.addEventListener('change', (e) => {
        e.target.value === 'Inspections' && indistary.value === '4'
          ? e.target.checked
            ? s4_1.classList.add('showThis')
            : s4_1.classList.remove('showThis')
          : s4_1.classList.remove('showThis');

        e.target.value === 'Assessment' && indistary.value === '4'
          ? e.target.checked
            ? s4_2.classList.add('showThis')
            : s4_2.classList.remove('showThis')
          : s4_2.classList.remove('showThis');

        e.target.value === 'Security' && indistary.value === '4'
          ? e.target.checked
            ? s4_3.classList.add('showThis')
            : s4_3.classList.remove('showThis')
          : s4_3.classList.remove('showThis');

        e.target.value === 'Environmental' && indistary.value === '4'
          ? e.target.checked
            ? s4_4.classList.add('showThis')
            : s4_4.classList.remove('showThis')
          : s4_4.classList.remove('showThis');

        e.target.value === 'Specific' && indistary.value === '4'
          ? e.target.checked
            ? s4_5.classList.add('showThis')
            : s4_5.classList.remove('showThis')
          : s4_5.classList.remove('showThis');

        e.target.value === 'Certifications' && indistary.value === '4'
          ? e.target.checked
            ? s4_6.classList.add('showThis')
            : s4_6.classList.remove('showThis')
          : s4_6.classList.remove('showThis');

        e.target.value === 'Environment' && indistary.value === '4'
          ? e.target.checked
            ? s4_7.classList.add('showThis')
            : s4_7.classList.remove('showThis')
          : s4_7.classList.remove('showThis');

        e.target.value === 'Training' && indistary.value === '4'
          ? e.target.checked
            ? s4_8.classList.add('showThis')
            : s4_8.classList.remove('showThis')
          : s4_8.classList.remove('showThis');
      });
    });

    nS4_1.addEventListener('change', () => {
      if (nS4_1.checked) {
        nSS4_1.classList.add('showThis');
      } else {
        nSS4_1.classList.remove('showThis');
      }
    });
    nS4_2.addEventListener('change', () => {
      if (nS4_2.checked) {
        nSS4_2.classList.add('showThis');
      } else {
        nSS4_2.classList.remove('showThis');
      }
    });
    nS4_3.addEventListener('change', () => {
      if (nS4_3.checked) {
        nSS4_3.classList.add('showThis');
      } else {
        nSS4_3.classList.remove('showThis');
      }
    });
    nS4_4.addEventListener('change', () => {
      if (nS4_4.checked) {
        nSS4_4.classList.add('showThis');
      } else {
        nSS4_4.classList.remove('showThis');
      }
    });

    // neste 3 Three ==========
    N41.addEventListener('change', () => {
      N41.checked
        ? NC41.classList.add('showThis')
        : NC41.classList.remove('showThis');
    });
    N42.addEventListener('change', () =>
      N42.checked
        ? NC42.classList.add('showThis')
        : NC42.classList.remove('showThis')
    );
    N43.addEventListener('change', () =>
      N43.checked
        ? NC43.classList.add('showThis')
        : NC43.classList.remove('showThis')
    );
    N44.addEventListener('change', () =>
      N44.checked
        ? NC44.classList.add('showThis')
        : NC44.classList.remove('showThis')
    );
    N45.addEventListener('change', () =>
      N45.checked
        ? NC45.classList.add('showThis')
        : NC45.classList.remove('showThis')
    );
    N46.addEventListener('change', () =>
      N46.checked
        ? NC46.classList.add('showThis')
        : NC46.classList.remove('showThis')
    );
    N47.addEventListener('change', () =>
      N47.checked
        ? NC47.classList.add('showThis')
        : NC47.classList.remove('showThis')
    );
  }

  // ===========5********
  if (indistary.value === '5') {
    servidesContainer.classList.add('showThis');

    [...servicest].forEach((items) => {
      items.addEventListener('change', (e) => {
        e.target.value === 'Inspections' && indistary.value === '5'
          ? e.target.checked
            ? s5_1.classList.add('showThis')
            : s5_1.classList.remove('showThis')
          : s5_1.classList.remove('showThis');

        e.target.value === 'Assessment' && indistary.value === '5'
          ? e.target.checked
            ? s5_2.classList.add('showThis')
            : s5_2.classList.remove('showThis')
          : s5_2.classList.remove('showThis');

        e.target.value === 'Security' && indistary.value === '5'
          ? e.target.checked
            ? s5_3.classList.add('showThis')
            : s5_3.classList.remove('showThis')
          : s5_3.classList.remove('showThis');

        e.target.value === 'Environmental' && indistary.value === '5'
          ? e.target.checked
            ? s5_4.classList.add('showThis')
            : s5_4.classList.remove('showThis')
          : s5_4.classList.remove('showThis');

        e.target.value === 'Specific' && indistary.value === '5'
          ? e.target.checked
            ? s5_5.classList.add('showThis')
            : s5_5.classList.remove('showThis')
          : s5_5.classList.remove('showThis');

        e.target.value === 'Certifications' && indistary.value === '5'
          ? e.target.checked
            ? s5_6.classList.add('showThis')
            : s5_6.classList.remove('showThis')
          : s5_6.classList.remove('showThis');

        e.target.value === 'Environment' && indistary.value === '5'
          ? e.target.checked
            ? s5_7.classList.add('showThis')
            : s5_7.classList.remove('showThis')
          : s5_7.classList.remove('showThis');

        e.target.value === 'Training' && indistary.value === '5'
          ? e.target.checked
            ? s5_8.classList.add('showThis')
            : s5_8.classList.remove('showThis')
          : s5_8.classList.remove('showThis');
      });
    });

    nS5_1.addEventListener('change', () => {
      if (nS5_1.checked) {
        nSS5_1.classList.add('showThis');
      } else {
        nSS5_1.classList.remove('showThis');
      }
    });
    nS5_2.addEventListener('change', () => {
      if (nS5_2.checked) {
        nSS5_2.classList.add('showThis');
      } else {
        nSS5_2.classList.remove('showThis');
      }
    });
    nS5_3.addEventListener('change', () => {
      if (nS5_3.checked) {
        nSS5_3.classList.add('showThis');
      } else {
        nSS5_3.classList.remove('showThis');
      }
    });
    nS5_4.addEventListener('change', () => {
      if (nS5_4.checked) {
        nSS5_4.classList.add('showThis');
      } else {
        nSS5_4.classList.remove('showThis');
      }
    });

    // neste 3 Three ==========
    N51.addEventListener('change', () => {
      N51.checked
        ? NC51.classList.add('showThis')
        : NC51.classList.remove('showThis');
    });
    N52.addEventListener('change', () =>
      N52.checked
        ? NC52.classList.add('showThis')
        : NC52.classList.remove('showThis')
    );
    N53.addEventListener('change', () =>
      N53.checked
        ? NC53.classList.add('showThis')
        : NC53.classList.remove('showThis')
    );
    N54.addEventListener('change', () =>
      N54.checked
        ? NC54.classList.add('showThis')
        : NC54.classList.remove('showThis')
    );
    N55.addEventListener('change', () =>
      N55.checked
        ? NC55.classList.add('showThis')
        : NC55.classList.remove('showThis')
    );
    N56.addEventListener('change', () =>
      N56.checked
        ? NC56.classList.add('showThis')
        : NC56.classList.remove('showThis')
    );
    N57.addEventListener('change', () =>
      N57.checked
        ? NC57.classList.add('showThis')
        : NC57.classList.remove('showThis')
    );
  }
  // ===========6********
  if (indistary.value === '6') {
    servidesContainer.classList.add('showThis');

    [...servicest].forEach((items) => {
      items.addEventListener('change', (e) => {
        e.target.value === 'Inspections' && indistary.value === '6'
          ? e.target.checked
            ? s6_1.classList.add('showThis')
            : s6_1.classList.remove('showThis')
          : s6_1.classList.remove('showThis');

        e.target.value === 'Assessment' && indistary.value === '6'
          ? e.target.checked
            ? s6_2.classList.add('showThis')
            : s6_2.classList.remove('showThis')
          : s6_2.classList.remove('showThis');

        e.target.value === 'Security' && indistary.value === '6'
          ? e.target.checked
            ? s6_3.classList.add('showThis')
            : s6_3.classList.remove('showThis')
          : s6_3.classList.remove('showThis');

        e.target.value === 'Environmental' && indistary.value === '6'
          ? e.target.checked
            ? s6_4.classList.add('showThis')
            : s6_4.classList.remove('showThis')
          : s6_4.classList.remove('showThis');

        e.target.value === 'Specific' && indistary.value === '6'
          ? e.target.checked
            ? s6_5.classList.add('showThis')
            : s6_5.classList.remove('showThis')
          : s6_5.classList.remove('showThis');

        e.target.value === 'Certifications' && indistary.value === '6'
          ? e.target.checked
            ? s6_6.classList.add('showThis')
            : s6_6.classList.remove('showThis')
          : s6_6.classList.remove('showThis');

        e.target.value === 'Environment' && indistary.value === '6'
          ? e.target.checked
            ? s6_7.classList.add('showThis')
            : s6_7.classList.remove('showThis')
          : s6_7.classList.remove('showThis');

        e.target.value === 'Training' && indistary.value === '6'
          ? e.target.checked
            ? s6_8.classList.add('showThis')
            : s6_8.classList.remove('showThis')
          : s6_8.classList.remove('showThis');
      });
    });

    nS6_1.addEventListener('change', () => {
      if (nS6_1.checked) {
        nSS6_1.classList.add('showThis');
      } else {
        nSS6_1.classList.remove('showThis');
      }
    });
    nS6_2.addEventListener('change', () => {
      if (nS6_2.checked) {
        nSS6_2.classList.add('showThis');
      } else {
        nSS6_2.classList.remove('showThis');
      }
    });
    nS6_3.addEventListener('change', () => {
      if (nS6_3.checked) {
        nSS6_3.classList.add('showThis');
      } else {
        nSS6_3.classList.remove('showThis');
      }
    });
    nS6_4.addEventListener('change', () => {
      if (nS6_4.checked) {
        nSS6_4.classList.add('showThis');
      } else {
        nSS6_4.classList.remove('showThis');
      }
    });

    // neste 3 Three ==========
    N61.addEventListener('change', () => {
      N61.checked
        ? NC61.classList.add('showThis')
        : NC61.classList.remove('showThis');
    });
    N62.addEventListener('change', () =>
      N62.checked
        ? NC62.classList.add('showThis')
        : NC62.classList.remove('showThis')
    );
    N63.addEventListener('change', () =>
      N63.checked
        ? NC63.classList.add('showThis')
        : NC63.classList.remove('showThis')
    );
    N64.addEventListener('change', () =>
      N64.checked
        ? NC64.classList.add('showThis')
        : NC64.classList.remove('showThis')
    );
    N65.addEventListener('change', () =>
      N65.checked
        ? NC65.classList.add('showThis')
        : NC65.classList.remove('showThis')
    );
    N66.addEventListener('change', () =>
      N66.checked
        ? NC66.classList.add('showThis')
        : NC66.classList.remove('showThis')
    );
    N67.addEventListener('change', () =>
      N67.checked
        ? NC67.classList.add('showThis')
        : NC67.classList.remove('showThis')
    );
  }
});

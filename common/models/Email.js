var moment = require('moment');
module.exports = function (MyModel) {
  // send an email
  var app = require('../../server/server');
  MyModel.sendEmail = function (cb) {
    var target = app.models.trn_mona;
    var realization = app.models.trn_mona_realization;
    var userbank = app.models.mst_user_bank;
    var user = app.models.mst_user;

    target.find({
      where: {
        and: [{
          TARGET_DATE: {
            gt: new Date(moment().subtract(4, 'days').format())
          }
        }, {
          TARGET_DATE: {
            lt: new Date(moment().add(2, 'days').format())
          }
        }]
      }
    }, function (err, data) {

      if (data[0] != null) {
        data.forEach(element => {
          console.log(element.TARGET_DATE)
          console.log(new Date(moment(element.TARGET_DATE).format()))
          console.log(new Date(moment(element.TARGET_DATE).subtract(3, 'days').format()))
          console.log(element.KETERANGAN)
          realization.find({
              where: {
                and: [{
                    and: [{
                      REALIZATION_DATE: {
                        gt: new Date(moment(element.TARGET_DATE).subtract(4, 'days').format())
                      }
                    }, {
                      REALIZATION_DATE: {
                        lt: new Date(moment(element.TARGET_DATE).subtract(2, 'days').format())
                      }
                    }]
                  },
                  {
                    ID_BANK: element.ID_BANK
                  }
                ]

              }
            },
            function (err, data) {
              if (data[0] != null) {
                console.log(data)
                data.forEach(element => {
                  userbank.find({
                    where: {
                      ID_BANK: element.ID_BANK
                    }
                  }, function (err, data) {

                    if (data[0] != null) {
                      data.forEach(element => {
                        user.find({
                          where: {
                            ID_USER: element.ID_USER
                          }
                        }, function (err, data) {
                          if (data[0] != null) {
                            data.forEach(element => {
                              MyModel.app.models.Email.send({
                                to: data[0].EMAIL,
                                from: 'corp\dpb1_dahsyat',
                                subject: 'Reminder Aplikasi Moka H-3',
                                text: 'my text',
                                html: "Dear, " + data[0].USER_NAME + ". <br />" +
                                  "Bank kelolaan anda belum melaporkan laporan IKU yang akan jatuh tempo pada tanggal " + moment().add(3, 'days').format("DD/MM/YYYY") + ". Mohon untuk segera berkoordinasi dengan bank yang bersangkutan. <br />" +
                                  "<br />" +
                                  "Regards, <br />" +
                                  "Reminder Aplikasi Moka"
                              }, function (err, mail) {
                                console.log('email sent!');
                                cb(err);
                              });
                            })
                          }

                        })
                      })
                    }
                  })
                })
              }
            })
        });
      }
    })


  }
};

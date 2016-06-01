var genericReporter = require('generic-checkmark-reporter')

function CheckmarkReporter (runner) {
  runner.on('start', function () {
    genericReporter.start(function (s) {
      process.stdout.write(s)
    })
  })

  runner.on('pass', function () {
    genericReporter.result('success')
  })

  runner.on('pending', function () {
    genericReporter.result('skipped')
  })

  runner.on('fail', function (test, err) {
    var failure = {
      description: test.fullTitle(),
      error: err
    }

    genericReporter.result('failure', failure)
  })

  runner.on('end', function () {
    genericReporter.end()
  })
}

module.exports = CheckmarkReporter

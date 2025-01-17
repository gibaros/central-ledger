/*****
 License
 --------------
 Copyright © 2017 Bill & Melinda Gates Foundation
 The Mojaloop files are made available by the Bill & Melinda Gates Foundation under the Apache License, Version 2.0 (the "License") and you may not use these files except in compliance with the License. You may obtain a copy of the License at
 http://www.apache.org/licenses/LICENSE-2.0
 Unless required by applicable law or agreed to in writing, the Mojaloop files are distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
 Contributors
 --------------
 This is the official list of the Mojaloop project contributors for this file.
 Names of the original copyright holders (individuals or organizations)
 should be listed with a '*' in the first column. People who have
 contributed from an organization can be listed under the organization
 that actually holds the copyright for their contributions (see the
 Gates Foundation organization for an example). Those individuals should have
 their names indented and be marked with a '-'. Email address can be added
 optionally within square brackets <email>.
 * Gates Foundation
 - Name Surname <name.surname@gatesfoundation.com>

 * Georgi Georgiev <georgi.georgiev@modusbox.com>
 * Valentin Genev <valentin.genev@modusbox.com>
 * Rajiv Mothilal <rajiv.mothilal@modusbox.com>
 * Miguel de Barros <miguel.debarros@modusbox.com>
 --------------
 ******/

'use strict'

const Db = require('../../lib/db')
const ErrorHandler = require('@mojaloop/central-services-error-handling')

const saveTransferExtension = async (extension) => {
  try {
    return await Db.transferExtension.insert(extension)
  } catch (err) {
    throw ErrorHandler.Factory.createFSPIOPError(ErrorHandler.Enums.FSPIOPErrorCodes.INTERNAL_SERVER_ERROR, err.message)
  }
}

const getByTransferId = async (transferId) => {
  try {
    return await Db.transferExtension.find({ transferId })
  } catch (err) {
    throw ErrorHandler.Factory.createFSPIOPError(ErrorHandler.Enums.FSPIOPErrorCodes.INTERNAL_SERVER_ERROR, err.message)
  }
}

const getByTransferFulfilmentId = async (transferFulfilmentId) => {
  try {
    return await Db.transferExtension.find({ transferFulfilmentId })
  } catch (err) {
    throw ErrorHandler.Factory.createFSPIOPError(ErrorHandler.Enums.FSPIOPErrorCodes.INTERNAL_SERVER_ERROR, err.message)
  }
}

const getByTransferErrorId = async (transferErrorId) => {
  try {
    return await Db.transferExtension.find({ transferErrorId })
  } catch (err) {
    throw ErrorHandler.Factory.createFSPIOPError(ErrorHandler.Enums.FSPIOPErrorCodes.INTERNAL_SERVER_ERROR, err.message)
  }
}

const getByTransferExtensionId = async (transferExtensionId) => {
  try {
    return await Db.transferExtension.findOne({ transferExtensionId })
  } catch (err) {
    throw ErrorHandler.Factory.createFSPIOPError(ErrorHandler.Enums.FSPIOPErrorCodes.INTERNAL_SERVER_ERROR, err.message)
  }
}

const destroyByTransferId = async (transferId) => {
  try {
    return await Db.transferExtension.destroy({ transferId })
  } catch (err) {
    throw ErrorHandler.Factory.createFSPIOPError(ErrorHandler.Enums.FSPIOPErrorCodes.INTERNAL_SERVER_ERROR, err.message)
  }
}

module.exports = {
  saveTransferExtension,
  getByTransferId,
  getByTransferFulfilmentId,
  getByTransferErrorId,
  getByTransferExtensionId,
  destroyByTransferId
}

const LocationHelper = require("../helpers/locationHelpers");
const LocationHelperClass = new LocationHelper();
class LocationErrors {
    createAndEditError = async (data) => {
        let { name, companyLegalName, email, phone1, points, _id } = data;
        let msg = [], status = 1;
        if (!_id) {
            status = 0;
            msg.push({
                key: "id",
                msg: "Id is required",
            });
        }
        if (!name) {
            status = 0;
            msg.push({
                key: "name",
                msg: "Name is required",
            });
        }
        if (!companyLegalName) {
            status = 0;
            msg.push({
                key: "companyLegalName",
                msg: "companyLegalName is required"
            });
        }
        if (!phone1) {
            status = 0;
            msg.push({
                key: "phone1",
                msg: "phone1 is required"
            });
        }
        let { error, address } = await LocationHelperClass.checkHoursCon(points);
        if (error && address) {
            status = 0;
            msg.push({
                key: "deliveryHours",
                msg: "Delivery Hours is required"
            }, {
                key: "workingHours",
                msg: "Working Hours is required"
            });
        } else if (error && !address) {
            msg.push({
                key: "deliveryHours",
                msg: "Delivery Hours is required"
            }, {
                key: "workingHours",
                msg: "Working Hours is required"
            }, {
                key: "address",
                msg: "Address is required"
            });
        }
        let latLonPoints;
        if (address) {
            latLonPoints = await LocationHelperClass.findLatLon(points);
            if (!latLonPoints.lat && !latLonPoints.lon) {
                status = 0;
                msg = msg.concat(latLonPoints.errors);
            }
        }
        return {
            status,
            msg,
            points: latLonPoints.pointArr
        };
    };
};
module.exports = LocationErrors;
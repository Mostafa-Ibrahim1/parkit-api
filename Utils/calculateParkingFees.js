const calculateParkingFees = (startTime, endTime) => {
  const timeDifference = (endTime - startTime) / 60000;

  return `Amount to be payed ${
    Math.round(timeDifference * 0.08335 * 100) / 100
  } EGP`;
};

module.exports = calculateParkingFees;

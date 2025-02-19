import moment from 'moment'

export const formatDate = (timestamp) => {
  return moment.unix(timestamp).format('MMMM DD, YYYY')
}

export const metersToFeet = (meters) => {
  return (parseFloat(meters) * 3.28084).toFixed(2)
}

export const formatCurrency = (amount) => {
  return Number(amount).toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD'
  })
}
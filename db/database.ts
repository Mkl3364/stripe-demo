import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('nextStripe', 'root', 'admin', {
  host: 'localhost',
  dialect: 'mysql'
});

export default sequelize
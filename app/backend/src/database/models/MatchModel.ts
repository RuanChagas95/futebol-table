import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize';
import db from '.';
import Matches from '../../Interfaces/Matches';

class MatcheModel extends Model<InferAttributes<MatcheModel>,
InferCreationAttributes<MatcheModel>> implements Matches {
  declare id: CreationOptional<number>;
  declare homeTeamGoals: CreationOptional<number>;
  declare awayTeamGoals: CreationOptional<number>;
  declare inProgress: CreationOptional<boolean>;
  public homeTeamId!: number;
  public awayTeamId!: number;
}

MatcheModel.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  homeTeamId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'home_team_id',
  },
  awayTeamId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'away_team_id',
  },
  homeTeamGoals: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'home_team_goals',
    defaultValue: 0,
  },
  awayTeamGoals: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'away_team_goals',
    defaultValue: 0,
  },
  inProgress: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    field: 'in_progress',
    defaultValue: true,
  },
}, {
  sequelize: db,
  modelName: 'matches',
  timestamps: false,
});

export default MatcheModel;

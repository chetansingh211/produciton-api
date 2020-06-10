/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Quota_Systems', {
		Quota_System: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		Description: {
			type: DataTypes.STRING,
			allowNull: true
		},
		LC_Required: {
			type: DataTypes.CHAR,
			allowNull: false
		},
		Allow_Transfer: {
			type: DataTypes.CHAR,
			allowNull: false
		},
		Allow_Revalidation: {
			type: DataTypes.CHAR,
			allowNull: false
		},
		BG_Rate_for_Fastmoving_Items: {
			type: DataTypes.FLOAT,
			allowNull: true
		},
		BG_Rate_for_Slowmoving_Items: {
			type: DataTypes.FLOAT,
			allowNull: true
		},
		Revalidation_Date1: {
			type: DataTypes.DATE,
			allowNull: true
		},
		Revalidation_Date2: {
			type: DataTypes.DATE,
			allowNull: true
		},
		Release_of_BG_in_full_Rate_FMI: {
			type: DataTypes.FLOAT,
			allowNull: true
		},
		Release_of_BG_Prop_fmi: {
			type: DataTypes.FLOAT,
			allowNull: true
		},
		Release_of_BG_in_full_Rate_SMI: {
			type: DataTypes.FLOAT,
			allowNull: true
		},
		Release_of_BG_in_Prop_smi: {
			type: DataTypes.FLOAT,
			allowNull: true
		},
		Transfer_Date1: {
			type: DataTypes.DATE,
			allowNull: true
		},
		Transfer_Date2: {
			type: DataTypes.DATE,
			allowNull: true
		},
		Transfer_Percentage: {
			type: DataTypes.FLOAT,
			allowNull: true
		},
		Council_Charges_per_piece: {
			type: DataTypes.FLOAT,
			allowNull: true
		}
	}, {
		tableName: 'Quota_Systems'
	});
};

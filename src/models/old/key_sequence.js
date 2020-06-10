/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('key_sequence', {
		code_key: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		key_format: {
			type: DataTypes.STRING,
			allowNull: true
		},
		key_sequence: {
			type: DataTypes.REAL,
			allowNull: true
		},
		key_description: {
			type: DataTypes.STRING,
			allowNull: true
		},
		table_name: {
			type: DataTypes.STRING,
			allowNull: true
		},
		key_column_name: {
			type: DataTypes.STRING,
			allowNull: true
		}
	}, {
		freezeTableName: true,
		timestamps: false
	},{
		tableName: 'key_sequence'
	}, {
        classMethods: {
            nextKeySequence: function(codeKey) {
              this.findOne({
                where: {code_key: codeKey}
              }).then(function(keySequence){
                keySequence.key_sequence = keySequence.key_sequence + 1;
                keySequence.save()
                .then(function(keySequence){
                    return keySequence.key_sequence;
                })
              })
            }
        }
    });
};

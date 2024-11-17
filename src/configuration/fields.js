export const groupField = {
    collection: 'directus_settings',
    field: 'yandex_foundation_models_config',
    type: 'alias',
    schema: null,
    meta: {
        collection: 'directus_settings',
        field: 'yandex_foundation_models_config',
        special: ['alias', 'no-data', 'group'],
        interface: 'group-detail',
        options: {headerIcon: 'rocket_launch'},
        display: null,
        display_options: null,
        readonly: false,
        hidden: false,
        sort: null,
        width: 'full',
        translations: null,
        note: null,
        conditions: null,
        required: false,
        group: null,
        validation: null,
        validation_message: null,
    },
};

export const yandexKeyField = {
    collection: 'directus_settings',
    field: 'Yandex_Cloud_API_Key',
    type: 'string',
    schema: {
        name: 'Yandex_Cloud_API_Key',
        table: 'directus_settings',
        data_type: 'varchar',
        default_value: null,
        max_length: 255,
        numeric_precision: null,
        numeric_scale: null,
        is_generated: false,
        generation_expression: null,
        is_nullable: true,
        is_unique: false,
        is_primary_key: false,
        has_auto_increment: false,
        foreign_key_column: null,
        foreign_key_table: null,
    },
    meta: {
        collection: 'directus_settings',
        field: 'Yandex_Cloud_API_Key',
        special: null,
        interface: 'input',
        options: {masked: true},
        display: null,
        display_options: null,
        readonly: false,
        hidden: false,
        sort: 2,
        width: 'full',
        translations: null,
        note: 'https://yandex.cloud/ru/docs/foundation-models/api-ref/authentication',
        conditions: null,
        required: false,
        group: groupField.field,
        validation: null,
        validation_message: null,
    },
};

export const yandexFolderField = {
    collection: 'directus_settings',
    field: 'Yandex_Folder',
    type: 'string',
    schema: {
        name: 'Yandex_Cloud_Folder',
        table: 'directus_settings',
        data_type: 'varchar',
        default_value: null,
        max_length: 255,
        numeric_precision: null,
        numeric_scale: null,
        is_generated: false,
        generation_expression: null,
        is_nullable: true,
        is_unique: false,
        is_primary_key: false,
        has_auto_increment: false,
        foreign_key_column: null,
        foreign_key_table: null,
    },
    meta: {
        collection: 'directus_settings',
        field: 'Yandex_Cloud_Folder',
        special: null,
        interface: 'input',
        options: {masked: true},
        display: null,
        display_options: null,
        readonly: false,
        hidden: false,
        sort: 2,
        width: 'full',
        translations: null,
        note: 'https://yandex.cloud/ru/docs/resource-manager/operations/folder/get-id',
        conditions: null,
        required: false,
        group: groupField.field,
        validation: null,
        validation_message: null,
    },
};

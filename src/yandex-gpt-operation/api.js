import {defineOperationApi} from '@directus/extensions-sdk';

import {yandexKeyField, yandexFolderField} from '../configuration/fields';
import {YandexGPTClient} from './client';

export default defineOperationApi({
    id: 'yandex-gpt-operation',
    handler: async (
        {temperature = 0.3, max_tokens = null, messages, input_api_key, folder: input_folder},
        {services, database, getSchema},
    ) => {
        const {SettingsService} = services;
        const schema = await getSchema();
        const settings = new SettingsService({schema, knex: database});

        const apiKey = await getSetting(settings, yandexKeyField.field, input_api_key);
        const folder = await getSetting(settings, yandexFolderField.field, input_folder);

        const client = new YandexGPTClient(apiKey, folder);
    },
});

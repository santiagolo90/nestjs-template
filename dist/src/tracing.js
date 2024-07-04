"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@opentelemetry/core");
const sdk_trace_base_1 = require("@opentelemetry/sdk-trace-base");
const exporter_jaeger_1 = require("@opentelemetry/exporter-jaeger");
const auto_instrumentations_node_1 = require("@opentelemetry/auto-instrumentations-node");
const propagator_jaeger_1 = require("@opentelemetry/propagator-jaeger");
const propagator_b3_1 = require("@opentelemetry/propagator-b3");
const exporter_prometheus_1 = require("@opentelemetry/exporter-prometheus");
const sdk_node_1 = require("@opentelemetry/sdk-node");
const context_async_hooks_1 = require("@opentelemetry/context-async-hooks");
const process = require("process");
const otelSDK = new sdk_node_1.NodeSDK({
    metricReader: new exporter_prometheus_1.PrometheusExporter({
        port: 8081,
    }),
    spanProcessor: new sdk_trace_base_1.BatchSpanProcessor(new exporter_jaeger_1.JaegerExporter()),
    contextManager: new context_async_hooks_1.AsyncLocalStorageContextManager(),
    textMapPropagator: new core_1.CompositePropagator({
        propagators: [
            new propagator_jaeger_1.JaegerPropagator(),
            new core_1.W3CTraceContextPropagator(),
            new core_1.W3CBaggagePropagator(),
            new propagator_b3_1.B3Propagator(),
            new propagator_b3_1.B3Propagator({
                injectEncoding: propagator_b3_1.B3InjectEncoding.MULTI_HEADER,
            }),
        ],
    }),
    instrumentations: [(0, auto_instrumentations_node_1.getNodeAutoInstrumentations)()],
});
exports.default = otelSDK;
process.on('SIGTERM', () => {
    otelSDK
        .shutdown()
        .then(() => console.log('SDK shut down successfully'), err => console.log('Error shutting down SDK', err))
        .finally(() => process.exit(0));
});
//# sourceMappingURL=tracing.js.map
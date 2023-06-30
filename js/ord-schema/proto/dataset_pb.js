/**
 * Copyright 2023 Open Reaction Database Project Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// source: ord-schema/proto/dataset.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global =
    (typeof globalThis !== 'undefined' && globalThis) ||
    (typeof window !== 'undefined' && window) ||
    (typeof global !== 'undefined' && global) ||
    (typeof self !== 'undefined' && self) ||
    (function () { return this; }).call(null) ||
    Function('return this')();

var ord$schema_proto_reaction_pb = require('../../ord-schema/proto/reaction_pb.js');
goog.object.extend(proto, ord$schema_proto_reaction_pb);
goog.exportSymbol('proto.ord.Dataset', null, global);
goog.exportSymbol('proto.ord.DatasetExample', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ord.Dataset = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ord.Dataset.repeatedFields_, null);
};
goog.inherits(proto.ord.Dataset, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ord.Dataset.displayName = 'proto.ord.Dataset';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ord.DatasetExample = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ord.DatasetExample, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ord.DatasetExample.displayName = 'proto.ord.DatasetExample';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ord.Dataset.repeatedFields_ = [3,4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ord.Dataset.prototype.toObject = function(opt_includeInstance) {
  return proto.ord.Dataset.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ord.Dataset} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ord.Dataset.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    description: jspb.Message.getFieldWithDefault(msg, 2, ""),
    reactionsList: jspb.Message.toObjectList(msg.getReactionsList(),
    ord$schema_proto_reaction_pb.Reaction.toObject, includeInstance),
    reactionIdsList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f,
    datasetId: jspb.Message.getFieldWithDefault(msg, 5, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ord.Dataset}
 */
proto.ord.Dataset.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ord.Dataset;
  return proto.ord.Dataset.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ord.Dataset} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ord.Dataset}
 */
proto.ord.Dataset.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 3:
      var value = new ord$schema_proto_reaction_pb.Reaction;
      reader.readMessage(value,ord$schema_proto_reaction_pb.Reaction.deserializeBinaryFromReader);
      msg.addReactions(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.addReactionIds(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setDatasetId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ord.Dataset.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ord.Dataset.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ord.Dataset} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ord.Dataset.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getReactionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      ord$schema_proto_reaction_pb.Reaction.serializeBinaryToWriter
    );
  }
  f = message.getReactionIdsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      4,
      f
    );
  }
  f = message.getDatasetId();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.ord.Dataset.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ord.Dataset} returns this
 */
proto.ord.Dataset.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string description = 2;
 * @return {string}
 */
proto.ord.Dataset.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ord.Dataset} returns this
 */
proto.ord.Dataset.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated Reaction reactions = 3;
 * @return {!Array<!proto.ord.Reaction>}
 */
proto.ord.Dataset.prototype.getReactionsList = function() {
  return /** @type{!Array<!proto.ord.Reaction>} */ (
    jspb.Message.getRepeatedWrapperField(this, ord$schema_proto_reaction_pb.Reaction, 3));
};


/**
 * @param {!Array<!proto.ord.Reaction>} value
 * @return {!proto.ord.Dataset} returns this
*/
proto.ord.Dataset.prototype.setReactionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.ord.Reaction=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ord.Reaction}
 */
proto.ord.Dataset.prototype.addReactions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.ord.Reaction, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ord.Dataset} returns this
 */
proto.ord.Dataset.prototype.clearReactionsList = function() {
  return this.setReactionsList([]);
};


/**
 * repeated string reaction_ids = 4;
 * @return {!Array<string>}
 */
proto.ord.Dataset.prototype.getReactionIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.ord.Dataset} returns this
 */
proto.ord.Dataset.prototype.setReactionIdsList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.ord.Dataset} returns this
 */
proto.ord.Dataset.prototype.addReactionIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ord.Dataset} returns this
 */
proto.ord.Dataset.prototype.clearReactionIdsList = function() {
  return this.setReactionIdsList([]);
};


/**
 * optional string dataset_id = 5;
 * @return {string}
 */
proto.ord.Dataset.prototype.getDatasetId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.ord.Dataset} returns this
 */
proto.ord.Dataset.prototype.setDatasetId = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ord.DatasetExample.prototype.toObject = function(opt_includeInstance) {
  return proto.ord.DatasetExample.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ord.DatasetExample} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ord.DatasetExample.toObject = function(includeInstance, msg) {
  var f, obj = {
    datasetId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    description: jspb.Message.getFieldWithDefault(msg, 2, ""),
    url: jspb.Message.getFieldWithDefault(msg, 3, ""),
    created: (f = msg.getCreated()) && ord$schema_proto_reaction_pb.RecordEvent.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ord.DatasetExample}
 */
proto.ord.DatasetExample.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ord.DatasetExample;
  return proto.ord.DatasetExample.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ord.DatasetExample} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ord.DatasetExample}
 */
proto.ord.DatasetExample.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDatasetId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setUrl(value);
      break;
    case 4:
      var value = new ord$schema_proto_reaction_pb.RecordEvent;
      reader.readMessage(value,ord$schema_proto_reaction_pb.RecordEvent.deserializeBinaryFromReader);
      msg.setCreated(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ord.DatasetExample.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ord.DatasetExample.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ord.DatasetExample} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ord.DatasetExample.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDatasetId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getUrl();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getCreated();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      ord$schema_proto_reaction_pb.RecordEvent.serializeBinaryToWriter
    );
  }
};


/**
 * optional string dataset_id = 1;
 * @return {string}
 */
proto.ord.DatasetExample.prototype.getDatasetId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ord.DatasetExample} returns this
 */
proto.ord.DatasetExample.prototype.setDatasetId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string description = 2;
 * @return {string}
 */
proto.ord.DatasetExample.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ord.DatasetExample} returns this
 */
proto.ord.DatasetExample.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string url = 3;
 * @return {string}
 */
proto.ord.DatasetExample.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.ord.DatasetExample} returns this
 */
proto.ord.DatasetExample.prototype.setUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional RecordEvent created = 4;
 * @return {?proto.ord.RecordEvent}
 */
proto.ord.DatasetExample.prototype.getCreated = function() {
  return /** @type{?proto.ord.RecordEvent} */ (
    jspb.Message.getWrapperField(this, ord$schema_proto_reaction_pb.RecordEvent, 4));
};


/**
 * @param {?proto.ord.RecordEvent|undefined} value
 * @return {!proto.ord.DatasetExample} returns this
*/
proto.ord.DatasetExample.prototype.setCreated = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ord.DatasetExample} returns this
 */
proto.ord.DatasetExample.prototype.clearCreated = function() {
  return this.setCreated(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ord.DatasetExample.prototype.hasCreated = function() {
  return jspb.Message.getField(this, 4) != null;
};


goog.object.extend(exports, proto.ord);

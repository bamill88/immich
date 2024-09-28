//
// AUTO-GENERATED FILE, DO NOT MODIFY!
//
// @dart=2.18

// ignore_for_file: unused_element, unused_import
// ignore_for_file: always_put_required_named_parameters_first
// ignore_for_file: constant_identifier_names
// ignore_for_file: lines_longer_than_80_chars

part of openapi.api;


class AnyOrAll {
  /// Instantiate a new enum with the provided [value].
  const AnyOrAll._(this.value);

  /// The underlying value of this enum member.
  final String value;

  @override
  String toString() => value;

  String toJson() => value;

  static const any = AnyOrAll._(r'any');
  static const all = AnyOrAll._(r'all');

  /// List of all possible values in this [enum][AnyOrAll].
  static const values = <AnyOrAll>[
    any,
    all,
  ];

  static AnyOrAll? fromJson(dynamic value) => AnyOrAllTypeTransformer().decode(value);

  static List<AnyOrAll> listFromJson(dynamic json, {bool growable = false,}) {
    final result = <AnyOrAll>[];
    if (json is List && json.isNotEmpty) {
      for (final row in json) {
        final value = AnyOrAll.fromJson(row);
        if (value != null) {
          result.add(value);
        }
      }
    }
    return result.toList(growable: growable);
  }
}

/// Transformation class that can [encode] an instance of [AnyOrAll] to String,
/// and [decode] dynamic data back to [AnyOrAll].
class AnyOrAllTypeTransformer {
  factory AnyOrAllTypeTransformer() => _instance ??= const AnyOrAllTypeTransformer._();

  const AnyOrAllTypeTransformer._();

  String encode(AnyOrAll data) => data.value;

  /// Decodes a [dynamic value][data] to a AnyOrAll.
  ///
  /// If [allowNull] is true and the [dynamic value][data] cannot be decoded successfully,
  /// then null is returned. However, if [allowNull] is false and the [dynamic value][data]
  /// cannot be decoded successfully, then an [UnimplementedError] is thrown.
  ///
  /// The [allowNull] is very handy when an API changes and a new enum value is added or removed,
  /// and users are still using an old app with the old code.
  AnyOrAll? decode(dynamic data, {bool allowNull = true}) {
    if (data != null) {
      switch (data) {
        case r'any': return AnyOrAll.any;
        case r'all': return AnyOrAll.all;
        default:
          if (!allowNull) {
            throw ArgumentError('Unknown enum value to decode: $data');
          }
      }
    }
    return null;
  }

  /// Singleton [AnyOrAllTypeTransformer] instance.
  static AnyOrAllTypeTransformer? _instance;
}

